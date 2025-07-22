"use server"
import { prisma } from '@repo/db';

export const getSubCategories = async (categoryId: string) => {
    const subCategories = await prisma.subCategory.findMany({
        where: { categoryId },
    });
    return subCategories;
};
