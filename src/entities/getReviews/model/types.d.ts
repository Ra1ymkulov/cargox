namespace GETREVIEW {
  type GetAllReviewRes = AllReviews[];
}
interface AllReviews {
  city: string;
  email: string;
  id: string;
  name: string;
  star: number;
  text: string;
  userId: string;
}
