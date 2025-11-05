import { REVIEW_API } from "@/shared/api";
import { useQuery } from "@tanstack/react-query";

const useGetAllReviews = () => {
  return useQuery<GETREVIEW.GetAllReviewRes, Error>({
    queryKey: [`/all-reviews`],
    queryFn: async () => {
      const response = await REVIEW_API.get(`/get-all-reviews`);
      return response.data.data;
    },
  });
};
export { useGetAllReviews };
