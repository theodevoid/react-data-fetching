import { axiosInstance } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export const useFetchProducts = ({ onError }) => {
  return useQuery({
    queryFn: async () => {
      const productsResponse = await axiosInstance.get("/products");

      return productsResponse;
    },
    queryKey: ["fetch.products"],
    onError,
  });
};
