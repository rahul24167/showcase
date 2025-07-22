import Image from "next/image";
import { getCategories } from "../app/actions/getCategories";
import CategoryCard from "./components/categoryCard";

export default async function Home() {
  // const categories = await getCategories();
  const categories = [
    {
      id: "1",
      name: "Category 1",
      imageUrl:
        "https://storage.googleapis.com/plency-store/images/2a87c5d0-4032-483e-ad85-3ceb19f08fa3",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "2",
      name: "Category 2",
      imageUrl:
        "https://storage.googleapis.com/plency-store/images/1b4b57cf-28bb-40d7-8898-19bac7532eba_Screenshot%20from%202025-06-03%2015-37-50.png",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "3",
      name: "Category 3",
      imageUrl:
        "https://storage.googleapis.com/plency-store/images/2a87c5d0-4032-483e-ad85-3ceb19f08fa3",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "4",
      name: "Category 4",
      imageUrl:
        "https://storage.googleapis.com/plency-store/images/1b4b57cf-28bb-40d7-8898-19bac7532eba_Screenshot%20from%202025-06-03%2015-37-50.png",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "5",
      name: "Category 5",
      imageUrl:
        "https://storage.googleapis.com/plency-store/images/2a87c5d0-4032-483e-ad85-3ceb19f08fa3",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  return (
    
    <div className="p-6">
      <div className="w-full mb-6 text-2xl font-bold">LOGO</div>

      <div className="flex flex-wrap -mx-3">
        {categories.map((category) => (
          
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}
