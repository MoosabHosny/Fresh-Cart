export async function getAllBrands() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/brands`,
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

export async function GetSpecificBrand(id: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/brands/${id}`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching product details for id ${id}:`, error);
    throw error;
  }
}