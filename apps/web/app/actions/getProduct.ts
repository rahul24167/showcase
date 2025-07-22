
"use server";
import { prisma } from "@repo/db";
import { Product } from "@repo/db/generated/client";

export async function getProducts(id: string): Promise<Product[]> {
  try {
    if (!id) {
      return [];
    }
    return prisma.product.findMany({
      where: { categoryId: id },
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export async function getProduct(id: string): Promise<Product | null> {
  try {
    if (!id) {
      return null;
    }
    return prisma.product.findUnique({
      where: { id },
    });
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}
