import { CarouselData } from "@/types";
import { Product, Products } from "@/types/product";

export const API_BASE_URL: string = "https://dummyjson.com";
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3001";

export const getAllProducts = async (): Promise<Products | null> => {
  try {
    const res = await fetch(`${API_BASE_URL}/products?limit=194`, {
      cache: 'force-cache',
      next: {
        revalidate: 60 * 60
      }
    });
    return await res.json();
  } catch (err) {
    console.error("Failed to fetch products: ", err);
    return null;
  }
};

export const getProductById = async (id: number | null): Promise<Product | null> => {
  try {
    const res = await fetch(`${API_BASE_URL}/product/${id}`);
    return await res.json();
  } catch (err) {
    console.error("Failed to fetch products: ", err);
    return null;
  }
};

export const searchProduct = async (query: string): Promise<Products | null> => {
  try {
    const res = await fetch(`${API_BASE_URL}/products/search?q=${query}`);
    return await res.json();
  } catch (err) {
    console.error('Failed to search products: ', err);
    return null;
  }
}

export const getCategories = async (): Promise<string[]> => {
  try {
    const res = await fetch(`${API_BASE_URL}/products/category-list`, {
      cache: 'force-cache',
      next: {
        revalidate: 60 * 60 * 60
      }
    });
    return await res.json();
  } catch (err) {
    console.error('Failed to get category list: ', err);
    return [];
  }
}

export const getProductsByCategory = async (category: string): Promise<Products | null> => {
  try {
    const res = await fetch(`${API_BASE_URL}/products/category/${category}`, {
      cache: 'force-cache',
      next: {
        revalidate: 60 * 60
      }
    });
    return await res.json();
  } catch (err) {
    console.error('Failed to get category list: ', err);
    return null;
  }
}

export const getCarouselData = async (): Promise<CarouselData[] | []> => {
  try {
    const res = await fetch(baseUrl + '/api/slides', {
      cache: 'force-cache',
      next: {
        revalidate: 60 * 60 * 60
      }
    });
    return await res.json();
  } catch (err) {
    console.error('Failed to fetch data: ', err);
    return [];
  }
}