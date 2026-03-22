import { ORDER_API } from "@/shared/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useGetCalculatePriceQuery = () => {
  const queryClient = useQueryClient();
  return useMutation<
    CALCULATEPRICE.GetCalculateRes,
    Error,
    CALCULATEPRICE.GetCalculateReq
  >({
    mutationFn: async (service) => {
      const response = await ORDER_API.post("/calculate-price", service);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["calculate-price"] });
    },
  });
};
