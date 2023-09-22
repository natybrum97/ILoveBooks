export type Review = {
  id: number;
  bookId: number;
  review: string;
  grade: number;
  cover: string;
};

export type CreateReview = Omit<Review, "id">;