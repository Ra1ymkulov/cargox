import { useMutation } from "@tanstack/react-query";
import { ORDER_API } from "@/shared/api";
import { useOrderStore } from "../model/createorderStore";

export const useCreateOrder = () => {
  const addOrder = useOrderStore((state) => state.addOrder);
  return useMutation<
    CREATEORDER.GetCreateOrderRes,
    Error,
    CREATEORDER.GetCreateOrderReq
  >({
    mutationFn: async (order) => {
      const response = await ORDER_API.post("/create-order", order);
      return response.data;
    },
    onSuccess: (newOrder) => {
      addOrder(newOrder);
    },
  });
};
