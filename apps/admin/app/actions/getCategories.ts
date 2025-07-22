'use server'; 
import { prisma } from '@repo/db';
import { Category } from '@repo/db/generated/client';

export const getCategories = async (): Promise<Category[]> => {
  const categories = await prisma.category.findMany();
  return categories;
};
export const getCategoryById = async (id: string): Promise<Category | null> => {
  const category = await prisma.category.findUnique({
    where: { id },
  });
  return category;
};