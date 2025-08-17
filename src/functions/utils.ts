import { getAllProducts } from "@/services/productService";
import { Product, Products } from "@/types";

export function calculatePercentage(total: number, percentage: number): number {
  return (total * percentage) / 100;
}

export const showSuggestion = async (value: string) => {
  if (!value) return [];
  const query = value.toLowerCase();
  const data: Products | null = await getAllProducts();

  const suggestionArray = data?.products
    ?.filter((product: Product) => {
      const titleMatch = product.title.toLowerCase().includes(query);
      const tagMatch = product.tags?.some(tag =>
        tag.toLowerCase().includes(query)
      );
      return titleMatch || tagMatch;
    })
    .sort((a: Product, b: Product) => {
      const aStarts = a.title.toLowerCase().startsWith(query) ? -1 : 1;
      const bStarts = b.title.toLowerCase().startsWith(query) ? -1 : 1;
      return aStarts - bStarts;
    })
    .slice(0, 5);

  return suggestionArray?.map((item: Product) => item.title) ?? [];
};

export const generateToken = (email: string, pass: string) => {
  const base = email + pass;
  const randomPart = Math.random().toString(36).slice(2, 10); // random 8 chars
  return Buffer.from(base + randomPart).toString("base64");
};