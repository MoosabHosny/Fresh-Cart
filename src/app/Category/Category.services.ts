import { AllCategoryData, AllCategoryResponse } from "./Category";

export async function AllCategory(): Promise<AllCategoryData[]> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/categories`,
      {
        cache: "force-cache",
      },
    );
    const data: AllCategoryResponse = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching all products:", error);
    return [];
  }
}

export async function GetSpecificCategory(id: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/categories/${id}`,
      {
        cache: "force-cache",
      },
    );
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching all products:", error);
    return [];
  }
}

export async function GetAllSubCategoriesOnCategory(id: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/categories/${id}/subcategories`,
      {
        cache: "force-cache",
      },
    );
    const data: AllCategoryResponse = await response.json();
    // console.log('data====',data)
    return data.data;
  } catch (error) {
    console.error("Error fetching all products:", error);
    return [];
  }
}
export async function GetSpecificSubCategory(id: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/subcategories/${id}`,
      {
        cache: "force-cache",
      },
    );
    const data = await response.json();
    console.log('data====',data)
    return data.data;
  } catch (error) {
    console.error("Error fetching all products:", error);
    return [];
  }
}


