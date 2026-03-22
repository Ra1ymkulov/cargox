import { ORDER_API } from "@/shared/api";
import { useQuery } from "@tanstack/react-query";

const useGetAllServiceQuery = () => {
  return useQuery<ALLSERVICE.GetAllServiceRes, Error>({
    queryKey: [`/all-service`],
    queryFn: async () => {
      const response = await ORDER_API.get(`/get-all-service`);
      if (response.data.data) {
        return response.data.data;
      }
    },
  });
};
export { useGetAllServiceQuery };
