import { ORDER_API } from "@/shared/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useChangeStatus = () => {
  const queryClient = useQueryClient();

  return useMutation<STATUS.GetStatusRes, Error, STATUS.GetStatusReq>({
    mutationFn: async ({ id, status, userId }) => {
      const response = await ORDER_API.post(`/status-change/${id}`, {
        status,
        userId,
      });

      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
  });
};
