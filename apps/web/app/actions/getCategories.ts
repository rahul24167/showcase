"use server";
import { prisma } from "@repo/db";
import { Category } from "@repo/db/generated/client";

export const getCategories = async (): Promise<Category[]> => {
  const categories = await prisma.category.findMany();
    if (!categories) {
        console.error("No categories found");
        return [];
    }
  return categories;
};
