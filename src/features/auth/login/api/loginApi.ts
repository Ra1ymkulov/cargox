import { AUTH_API } from "@/shared/api/authApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useLoginApi = () => {
  const queryClient = useQueryClient();
  return useMutation<USERLOGIN.GetUserRes, Error, USERLOGIN.GetUserReq>({
    mutationFn: async (user) => {
      const response = await AUTH_API.post("/login", user);
      localStorage.setItem("user", JSON.stringify(response.data.token));
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
};
