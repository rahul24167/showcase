'use server'; 
import { prisma } from '@repo/db';

export const getCategories = async () => {
  const categories = await prisma.category.findMany();
  return categories;
};
export const getCategoryById = async (id: string) => {
  const category = await prisma.category.findUnique({
    where: { id },
  });
  return category;
};