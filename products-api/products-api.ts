export async function addToCart(userId: string, productId: number, quantity: number) {
    const response = await fetch(`${process.env.BASE_URL}/api/products/addToCart`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, productId, quantity }),
    });
  
    const data = await response.json();
    if (data.success) {
    } else {
      console.error('Failed to add product to cart:', data.error);
    }
  }
export async function addRating(userId: string, productId: number, rating: number) {
    const response = await fetch(`${process.env.BASE_URL}/api/products/product-review`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, productId, rating }),
    });
  
    const data = await response.json();
    if (data.success) {
    } else {
      console.error('Failed to add product to cart:', data.error);
    }
  }

  export async function getProducts(){
    const response = await fetch(`${process.env.BASE_URL}/api/products/get-products`, {
      cache: "no-store",  
      method: "GET",
    });
      const {products} = await response.json()
   
    return products?.rows;
  }

  export async function getAverageRating(productId: number){
    const response = await fetch(`${process.env.BASE_URL}/api/products/product-average-review/${productId}`, {
      cache: "no-store",  
      method: "GET",
    });
    if (!response.ok) {
      throw new Error("Failed to fetch average rating");
    }
  
    const data = await response.json();
    return data.averageRating;   
  }
  export async function getUserRating(productId: number) {
    try {
        const response = await fetch(`${process.env.BASE_URL}/api/products/get-product-review/${productId}`, {
            cache: "no-store",
            method: "GET",
        });

        if (!response.ok) {
            throw new Error("Failed to fetch user rating");
        }

        const data = await response.json();
        return data; // Return parsed JSON data, not the response object
    } catch (error) {
        console.error("Error fetching user rating:", error);
        throw error; // Rethrow the error to be handled by the caller
    }
}
