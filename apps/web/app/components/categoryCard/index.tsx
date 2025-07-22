import React from "react";
import { Category } from "@repo/db/generated/client";
import Image from "next/image";
import Link from "next/link";

const CategoryCard = ({ category }: { category: Category }) => {
  return (
    <Link href={`/categories/${category.id}`} key={category.id} className="w-full sm:w-1/2 px-3 mb-6">
      <div className="group relative overflow-hidden rounded-xl bg-white shadow hover:shadow-xl transition-shadow duration-300">
        <div className="relative w-full aspect-video">
          <Image
            src={category.imageUrl}
            alt={category.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600">
            {category.name}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
