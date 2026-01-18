import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchSingleProduct = async (id) => {
  const { data } = await axios.get(`/api/products/${id}`);
  return data;
};

export const useSingleProduct = (id) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchSingleProduct(id),
    enabled: !!id, 
  });
};