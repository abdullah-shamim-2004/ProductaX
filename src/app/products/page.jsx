"use client";
import ProductCard from "@/Components/Product/ProductCard";
import { useProducts } from "@/hooks/useProducts";
import React from "react";

const ProductsPage = () => {
  const { data: products, isLoading, isError } = useProducts();

  //   if (isLoading) {
  //     return (
  //       <div className="container mx-auto p-10 mt-20">
  //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
  //           {[...Array(8)].map((_, i) => (
  //             <div
  //               key={i}
  //               className="h-72 bg-gray-100 animate-pulse rounded-2xl"
  //             />
  //           ))}
  //         </div>
  //       </div>
  //     );
  //   }

  if (isError || !products || products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <div className="bg-gray-50 p-10 rounded-full mb-4">📦</div>
        <h2 className="text-2xl font-semibold text-gray-700">
          No Products Found
        </h2>
        <p className="text-gray-500 mb-6">
          We couldn't find any products in our database right now.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
        >
          Refresh Page
        </button>
      </div>
    );
  }

  return (
    <main className="bg-[#F8FAFC] min-h-screen pt-28 pb-20 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
            Premium Collection
          </h1>
          <div className="flex items-center gap-2">
            <span className="h-1 w-12 bg-indigo-600 rounded-full"></span>
            <p className="text-slate-500 font-medium">
              Showing {products.length} exclusive items
            </p>
          </div>
        </header>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
          {products.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProductsPage;
