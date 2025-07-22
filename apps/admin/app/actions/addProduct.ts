"use server";
import { prisma } from "@repo/db";
import { Product } from "@repo/db/generated/client";

export async function addProduct(productData: Product) {
  const product = await prisma.product.create({
    data: productData,
  });
  return product;
}