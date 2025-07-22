"use client"
import React from 'react'
import {useState, useEffect} from 'react';
import { useParams } from 'next/navigation';
import { getProduct } from '../../actions/getProduct';
import { Product } from '@repo/db/generated/client';
import Image from 'next/image';
const SlugPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { slug } = useParams();
  if (!slug) {
    return <div>Category not found</div>;
  }
  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = await getProduct(slug as string);
      setProducts(fetchedProducts);
    };
    fetchProducts();
  }, [slug]);
  if (!products) {
    return <div>No products found for this category</div>;
  }
  return (
    <div>
      {products.map((product) => (
        <div key={product.id} className='relative'>
          <Image src={product.imageUrl} alt='' fill />
        </div>
      ))}
    </div>
  )
}

export default SlugPage;