
import { ORDER_API } from "@/shared/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useReadMessage = () => {
  const queryClient = useQueryClient();
  return useMutation<
    USERREADMESSAGE.GetUserRes,
    Error,
    USERREADMESSAGE.GetUserReq
  >({
    mutationFn: async (id) => {
      const response = await ORDER_API.put(`/user/${id}/read`);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["read"] });
    },
  });
};
