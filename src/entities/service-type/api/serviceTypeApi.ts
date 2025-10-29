import { ORDER_API } from "@/shared/api";
import { useQuery } from "@tanstack/react-query";

const useGetServiceTypeQuery = () => {
  return useQuery<SERVICETYPE.GetServiceTypeRes, Error>({
    queryKey: [`/service-type`],
    queryFn: async () => {
      const response = await ORDER_API.get(`/get-service-type`);
      return response.data;
    },
  });
};
export { useGetServiceTypeQuery };
