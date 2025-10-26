import { USER_API } from "@/shared/api/userApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useContactApi = () => {
  const queryClient = useQueryClient();
  return useMutation<USERLOGIN.GetUserRes, Error, USERLOGIN.GetUserReq>({
    mutationFn: async (contact) => {
      const response = await USER_API.post(
        "/message-contact-telegram",
        contact
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contact"] });
    },
  });
};
