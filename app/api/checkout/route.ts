import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);



 interface Product {
  id: string;
  title: string;
  price: number;
}

interface CheckoutDataItem {
  id: string;
  quantity: number;
}

const getActiveProducts = async (): Promise<Stripe.Product[]> => {
  const checkProducts = await stripe.products.list();
  const availableProducts = checkProducts.data.filter((product: Stripe.Product) => product.active === true);  
  return availableProducts;
};



export const POST = async (request: NextRequest) => {
  const { products, checkoutData }: { products: Product[]; checkoutData: CheckoutDataItem[] } = await request.json();

  const data = products;

  const stripeQuantities = checkoutData.map((item) => item.quantity);

  let activeProducts = await getActiveProducts();

  try {
    for (const product of data) {
      const stripeProduct = activeProducts?.find(
        (stripeProduct) =>
          stripeProduct?.name?.toLowerCase() == product?.title?.toLowerCase()
      );

      if (stripeProduct == undefined) {
        await stripe.products.create({
          name: product.title,
          default_price_data: {
            unit_amount: product.price * 100,
            currency: "usd",
          },
        });
      }
    }
  } catch (error) {
    console.error("Error in creating a new product", error);
    throw error;
  }

  activeProducts = await getActiveProducts();
  const stripeItems: Stripe.Checkout.SessionCreateParams.LineItem[] = [];

  for (const product of products) {
    const stripeProduct = activeProducts.find(
      (prod) => prod.name.toLowerCase() === product.title.toLowerCase()
    );
    if (stripeProduct) {
        const quantityIndex = data.findIndex((item) => item.id === product.id);
        const quantity = stripeQuantities[quantityIndex];
  
        stripeItems.push({
          price_data: {
            currency: "usd",
            unit_amount: product.price * 100,
            product_data: {
              name: stripeProduct.name,
              images: stripeProduct.images,
            },
          },
          
          quantity: quantity,
        });
      }
  
  }


  const session = await stripe.checkout.sessions.create({
    line_items: stripeItems,
    mode: "payment",
    success_url: `${process.env.BASE_URL}/success-order`,
    cancel_url: `${process.env.BASE_URL}/cancel-order`,
  });

    return NextResponse.json({url: session.url})
}