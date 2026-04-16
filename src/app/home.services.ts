import { AllProductData, AllProductsResponse, ProductDetailsResponse } from "./home";

// export async function getAllProducts(brandId?: string): Promise<AllProductData[]> {
//   console.log('brandId===========  ',brandId)
//   try {
//     let url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/products`;

//     if (brandId) {
//       url += `?brand=${brandId}`;
//     }

//     const response = await fetch(url, {
//       cache: 'force-cache'
//     });

//     const data: AllProductsResponse = await response.json();
//     console.log('data ======================  44 ',data)
//     return data.data;
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     return [];
//   }
// }
export async function getAllProducts(brandId?: string, subCatId?: string): Promise<AllProductData[]> {
  // console.log('brandId============  ,',brandId)
  // console.log('subCatId============  ,',subCatId)
  try {
    let url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/products?`;

    if (brandId) {
        // console.log('brand============  ,',brandId)
      url += `brand=${brandId}&`;
    }

    if (subCatId) {
        // console.log('subCat============  ,',subCatId)
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