import { REVIEW_API } from "@/shared/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const usePostReview = () => {
  const queryClient = useQueryClient();

  return useMutation<
    POSTREVIEW.GetPostReviewRes,
    Error,
    POSTREVIEW.GetPostReviewReq
  >({
    mutationFn: async ({ review }) => {
      const response = await REVIEW_API.post("/add-reviews", review);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reviews"] });
    },
  });
};
