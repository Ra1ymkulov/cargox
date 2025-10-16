import { AUTH_API } from "./../../../shared/api/authApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
const useCreateRegister = () => {
  const queryClient = useQueryClient();
  return useMutation<Inter.PostLoginRes, Error, Inter.PostLoginReq>({
    mutationFn: async (value) => {
      const response = await AUTH_API.post("/login", value);
      console.log(value);

      console.log(response.data);
      return response.data;
    },
    onSuccess: (data) => {
      localStorage.setItem("accessToken", data.token);
      queryClient.invalidateQueries({ queryKey: ["login"] });
    },
  });
};
export { useCreateRegister };
