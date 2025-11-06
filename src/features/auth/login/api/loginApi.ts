import { AUTH_API } from "@/shared/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const useLoginApi = () => {
  const queryClient = useQueryClient();

  return useMutation<USERLOGIN.GetUserRes, Error, USERLOGIN.GetUserReq>({
    mutationFn: async (user) => {
      try {
        const response = await AUTH_API.post("/login", user);
        localStorage.setItem("user", JSON.stringify(response.data.token));
        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw new Error(
            error.response?.data?.message || "Неверный email или пароль"
          );
        }
        throw new Error("Ошибка входа");
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
};
