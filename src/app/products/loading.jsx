import React from "react";
// import ServiceSkeleton from "@/Components/skeleton/ServiceSkeleton";
import ProductSkeleton from "@/components/Skeleton/ProductSkeleton";
const loading = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
      {[...Array(5)].map((_, index) => (
        <ProductSkeleton key={index}></ProductSkeleton>
      ))}
    </div>
  );
};

export default loading;
