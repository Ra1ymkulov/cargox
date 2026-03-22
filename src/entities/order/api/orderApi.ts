import { ORDER_API } from "@/shared/api";
import { useQuery } from "@tanstack/react-query";

const useGetAllOrdersQuery = () => {
  return useQuery<ORDER.GetOrder, Error>({
    queryKey: ["/order"],
    queryFn: async () => {
      const response = await ORDER_API.get("/get-all-order");
      return response.data.getOrder;
    },
  });
};

export { useGetAllOrdersQuery };
