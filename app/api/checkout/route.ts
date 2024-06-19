import { NextResponse } from "next/server";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

 console.log(process.env.STRIPE_SECRET_KEY,"process.env.STRIPE_SECRET_KEY")

const getActiveProducts = async () => {
  const checkProducts = await stripe.products.list();
  const availableProducts = checkProducts.data.filter(
    (product: any) => product.active === true
  );
  return availableProducts;
};

export const POST = async (request: any) => {
  const { products, checkoutData } = await request.json();
  const data = products;
  console.log(checkoutData, "QUANTITY")

  const stripeQuantities = checkoutData.map((item: any) => item.quantity);

  let activeProducts = await getActiveProducts();

  try {
    for (const product of data) {
      const stripeProduct = activeProducts?.find(
        (stripeProduct: any) =>
          stripeProduct?.title?.toLowerCase() == product?.title?.toLowerCase()
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
  let stripeItems: any = [];

  for (const product of data) {
    const stripeProduct = activeProducts?.find(
      (prod: any) => prod?.name?.toLowerCase() == product?.title?.toLowerCase()
    );

    if (stripeProduct) {
        const quantityIndex = data.findIndex((item: any) => item.id === product.id);
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
  
    console.log(product, "stripeProduct")
  }

console.log(stripeItems, "STRIPEITEMS")

  const session = await stripe.checkout.sessions.create({
    line_items: stripeItems,
    mode: "payment",
    success_url: `${process.env.BASE_URL}/success-order`,
    cancel_url: `${process.env.BASE_URL}/cancel-order`,
  });

    return NextResponse.json({url: session.url})
}