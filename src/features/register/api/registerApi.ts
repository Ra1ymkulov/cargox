import { AUTH_API } from "@/shared/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useRegisterApi = () => {
  const queryClient = useQueryClient();
  return useMutation<USER.GetUserRes, Error, USER.GetUserReq>({
    mutationFn: async (newUser) => {
      const response = await AUTH_API.post("/register", newUser);
      localStorage.setItem("user", JSON.stringify(response.data.token));

      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
};
