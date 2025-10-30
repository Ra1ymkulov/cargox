import { ORDER_API } from "@/shared/api";
import { useMutation } from "@tanstack/react-query";

export const useDelOrder = () => {
  return useMutation<DELETEORDER.GetDelRes, Error, DELETEORDER.GetDelReq>({
    mutationFn: async (id) => {
      const response = await ORDER_API.delete(`/delete-order/${id}`);
      return response.data;
    },
  });
};
