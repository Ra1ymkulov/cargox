namespace POSTREVIEW {
  type GetPostReviewRes = Reviews[];
  type GetPostReviewReq = {
    review: {
      userId?: string;
      name: string;
      city: string;
      email: string;
      text: string;
      star: number | null;
    };
  };
}
