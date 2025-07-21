'use client';

import Link from "next/link";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";






export default function Home() {
  return (
   <div>

    <Link href="/categories">Categories</Link>


   <Link href="/subcategories">Subcategories</Link>

   <button>Post a Product</button>
   </div>
  );
}
