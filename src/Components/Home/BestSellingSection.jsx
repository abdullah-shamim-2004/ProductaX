"use client";
import { bestSellingProducts } from "@/data/bestSellingProducts";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";

export default function BestSellingSection() {
  const handleCart = () => {
    toast("Successfully Add to Cart");
  };
  return (
    <section className="py-20 bg-gray-50">
      <ToastContainer></ToastContainer>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Best Selling Products
          </h2>
          <p className="text-gray-600 mt-3">
            Discover the most loved and trending products from ProductaX
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestSellingProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden flex flex-col h-full"
            >
              {/* 1. Added 'flex flex-col h-full' to the parent card */}

              {/* Image */}
              <div className="relative h-56 shrink-0">
                {/* Added 'shrink-0' to prevent image from squishing */}
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
                <span className="absolute top-4 left-4 bg-black text-white text-xs px-3 py-1 rounded-full">
                  {product.badge}
                </span>
              </div>

              {/* Content Wrapper */}
              <div className="p-5 flex flex-col flex-grow">
                {/* 2. Added 'flex flex-col flex-grow' here */}

                <h3 className="font-semibold text-lg text-gray-900 line-clamp-2 min-h-[3.5rem]">
                  {/* 3. Added 'min-h' to ensure 1-line and 2-line titles take same space */}
                  {product.title}
                </h3>

                <div className="flex items-center justify-between mt-3">
                  <span className="text-primary font-bold text-xl">
                    ৳{product.price}
                  </span>
                  <span className="text-sm text-gray-500">
                    ⭐ {product.rating}
                  </span>
                </div>

                <p className="text-sm text-gray-500 mt-2">
                  {product.sold}+ sold
                </p>

                {/* 4. Button pushes to bottom using mt-auto */}
                <button
                  onClick={handleCart}
                  className="mt-1.5 w-full bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
