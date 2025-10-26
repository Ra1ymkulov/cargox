import { USER_API } from "@/shared/api";
import { useQuery } from "@tanstack/react-query";

export const useGetServiceType = () => {
  return useQuery<SERVICE.GetService>({
    queryKey: ["service-type"],
    queryFn: async () => {
      const { data } = await USER_API.get("/get-service-type");
      return data;
    },
    refetchOnWindowFocus: false,
  });
};
