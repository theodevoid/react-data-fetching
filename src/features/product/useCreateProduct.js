import { axiosInstance } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export const useCreateProduct = ({ onSuccess }) => {
  return useMutation({
    mutationFn: async (body) => {
      const productsResponse = await axiosInstance.post("/products", body);

      return productsResponse;
    },
    onSuccess,
  });
};
