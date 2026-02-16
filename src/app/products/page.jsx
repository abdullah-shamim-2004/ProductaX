import ProductCard from "@/components/Product/ProductCard";
import SearchBar from "@/components/SearchBar/SearchBar";
import { error, log } from "console";
// import { useProducts } from "@/hooks/useProducts";
import React from "react";
async function getProducts(params) {
  const res = await fetch("http://localhost:3000/api/products");
  if (!res.ok) {
    throw new Error("Failed to fetch data!");
  }
  return res.json();
}

const ProductsPage = async () => {
  // const { data: products, isError } = useProducts();
  const products = await getProducts();
  // console.log(products);

  if (!products || products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h2 className="text-2xl font-semibold text-gray-700">
          No Products Found
        </h2>
        <p className="text-gray-500 mb-6">
          We do not find any products in our database right now.
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
        <header className="mb-12 flex items-center justify-center md:justify-between">
          <div className=" hidden md:block lg:block">
            <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
              Premium Collection
            </h1>
            <div className="flex items-center gap-2">
              <span className="h-1 w-12 bg-indigo-600 rounded-full"></span>
              <p className="text-slate-500 font-medium">
                Showing {products?.length} exclusive items
              </p>
            </div>
          </div>
          {/* Search and filter section */}
          <div>
            <SearchBar />
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
