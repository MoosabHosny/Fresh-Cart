import { AllProductData, AllProductsResponse, ProductDetailsResponse } from "./home";

export async function getAllProducts(brandId?: string, subCatId?: string): Promise<AllProductData[]> {
  try {
    let url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/products?`;

    if (brandId) {
      url += `brand=${brandId}&`;
    }

    if (subCatId) {
      url += `subcategory=${subCatId}&`;
    }

    const response = await fetch(url, { cache: 'force-cache' });
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export async function getProductDetails(id: string): Promise<AllProductData> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/products/${id}`,
    );
    const data: ProductDetailsResponse = await response.json();
    return data.data;
  } catch (error) {
    console.error(`Error fetching product details for id ${id}:`, error);
    throw error; 
  }
}