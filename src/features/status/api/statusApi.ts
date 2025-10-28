import { ORDER_API } from "@/shared/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useChangeStatus = () => {
  const queryClient = useQueryClient();
  return useMutation<STATUS.GetStatusRes, Error, STATUS.GetStatusReq>({
    mutationFn: async ({ id, status, userId }) => {
        console.log(id);
      const response = await ORDER_API.post(
        `/status-change/${id}/${status}`,
        "c8ae0841-9d1b-486f-bcdc-382806470b7b"
      );

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["status"] });
    },
  });
};
