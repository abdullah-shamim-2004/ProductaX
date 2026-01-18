"use client";

import Image from "next/image";
import { useSingleProduct } from "@/hooks/useSingleProduct";
import { useParams } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";

export default function SingleProductPage() {
  const { id } = useParams();
  //   console.log(id);

  const { data: product, isLoading, isError } = useSingleProduct(id);
  //   console.log(product);

  if (isLoading) return <div className="p-20 text-center">Loading...</div>;
  if (isError)
    return (
      <div className="p-20 text-center text-red-500">Product not found.</div>
    );
  const handleCart = () => {
    toast("developer don't impliment add to cart function.");
  };

  return (
    <div className="container mx-auto p-10">
      <ToastContainer></ToastContainer>
      <div className="flex flex-col md:flex-row gap-10 bg-white p-8 rounded-2xl shadow-sm">
        {/* প্রোডাক্ট ইমেজ */}
        <div className="flex-1 relative h-[400px]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain"
          />
        </div>

        {/* প্রোডাক্ট ডিটেইলস */}
        <div className="flex-1 space-y-4">
          <p className="text-blue-500 uppercase font-semibold">
            {product.category}
          </p>
          <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-2xl font-bold text-gray-900">${product.price}</p>

          <div className="border-t border-b py-4 mt-4">
            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <p>
              <strong>Brand:</strong> {product.brand}
            </p>
            <p>
              <strong>Stock:</strong> {product.stock} left
            </p>
            <p>
              <strong>Color:</strong> {product.color}
            </p>
            <p>
              <strong>Rating:</strong> ⭐ {product.rating}
            </p>
          </div>

          <button
            onClick={handleCart}
            className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
