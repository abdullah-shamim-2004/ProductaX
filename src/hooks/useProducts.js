import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchProducts = async () => {
  // ১. সঠিক API এন্ডপয়েন্ট ব্যবহার করুন
  // ২. .data প্রপার্টি থেকে ডেটা নিন
  const response = await axios.get("/api/products");
  return response.data;
};

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
};
