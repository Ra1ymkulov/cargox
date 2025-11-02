import { ORDER_API } from "@/shared/api";
import { useMutation } from "@tanstack/react-query";

export const useDelOrder = () => {
  return useMutation<DELETEORDER.GetDelRes, Error, DELETEORDER.GetDelReq>({
    mutationFn: async (id) => {
      const response = await ORDER_API.delete(`/order-delete/${id}`);
      return response.data;
    },
  });
};
