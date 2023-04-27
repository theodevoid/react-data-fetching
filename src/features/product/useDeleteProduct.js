import { axiosInstance } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export const useDeleteProduct = ({ onSuccess }) => {
  return useMutation({
    mutationFn: async (id) => {
      const productsResponse = await axiosInstance.delete(`/products/${id}`);

      return productsResponse;
    },
    onSuccess,
  });
};
