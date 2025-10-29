import { ORDER_API } from "@/shared/api";
import { useQuery } from "@tanstack/react-query";

const useGetAllServiceQuery = () => {
  return useQuery<ALLSERVICE.GetAllServiceRes, Error>({
    queryKey: [`/all-service`],
    queryFn: async () => {
      const response = await ORDER_API.get(`/get-all-service`);
      return response.data;
    },
  });
};
export { useGetAllServiceQuery };
