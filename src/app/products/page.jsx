"use client";
import ProductCard from "@/Components/Product/ProductCard";
import { useProducts } from "@/hooks/useProducts";
import React from "react";

const productsPage = () => {
  const { data: products, isLoading, isError } = useProducts();
  console.log(products);
  if (isLoading) return <p>Loading</p>;

  return (
    <div className="p-10 mt-25">
      <h1 className="text-2xl font-bold mb-6">All Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard product={product} key={product._id}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default productsPage;
