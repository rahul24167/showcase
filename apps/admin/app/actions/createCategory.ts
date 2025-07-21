"use server"
import { prisma } from '@repo/db';

export async function createCategory(formData: FormData) {
  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    name: formData.get("name") as string,
    description: formData.get("description") as string,
  };

  try {
    const category = await prisma.category.create({
      data,
    });
    if(!category) {
      return {status: 500, message: "Failed to create category"};
    }
    return {status: 200, message: "Category created successfully", category};
  } catch (error) {
    console.error("Error creating category:", error);
    throw new Error("Failed to create category");
  }
}

