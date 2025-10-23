import { AUTH_API } from "@/shared/api";
import { useQuery } from "@tanstack/react-query";

export const useGetServiceType = () => {
  return useQuery({
    queryKey: ["service-type"],
    queryFn: async () => {
      const { data } = await AUTH_API.get("/user/get-service-type");
      return data;
    },
    refetchOnWindowFocus: false,
  });
};
