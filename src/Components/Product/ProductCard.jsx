import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-xl p-4 shadow-sm hover:shadow-md transition bg-white flex flex-col justify-between">
      <div>
        <div className="relative h-48 w-full mb-4">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain rounded-md"
          />
        </div>
        <span className="text-xs font-semibold px-2 py-1 bg-gray-100 rounded-full text-gray-500 uppercase">
          {product.category}
        </span>
        <h3 className="text-lg font-bold mt-2 text-gray-800 line-clamp-1">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">
          {product.description}
        </p>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-xl font-bold text-blue-600">
          ${product.price}
        </span>
        <Link
          href={`/products/${product._id}`}
          className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
