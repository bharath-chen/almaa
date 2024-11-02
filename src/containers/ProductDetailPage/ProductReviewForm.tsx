import Textarea from "../../shared/Textarea/Textarea";
import { Rating } from "react-simple-star-rating";
import ButtonPrimary from "../../shared/Button/ButtonPrimary";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import InputErrorMessage from "../../components/InputErrorMessage/InputErrorMessage";
import Label from "../../components/Label/Label";

interface Props {
  onClose: () => void;
  submitReview: ({
    rating,
    comments,
  }: {
    rating: number;
    comments: string;
  }) => void;
}

const schema = z.object({
  comments: z
    .string({ required_error: "Comments is required" })
    .min(8, { message: "Must be 8 or more characters long" }),
  rating: z
    .number({ required_error: "Rating is required" })
    .min(1, { message: "Please provide a rating" }),
});

type Review = z.infer<typeof schema>;

const ProductReviewForm = ({ submitReview, onClose }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<Review>({ resolver: zodResolver(schema) });

  const [rating, setRating] = useState(0);

  const submit = (data: Review) => {
    submitReview({ comments: data.comments, rating: data.rating });
    reset();
  };

  const handleRating = (rate: number) => {
    setRating(rate);
    setValue("rating", rate);
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-lg mx-4 p-6 rounded-lg shadow-lg relative overflow-auto">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold mb-4">Product Review</h2>

        <form onSubmit={handleSubmit(submit)} className="space-y-4">
          {/* Title Field */}
          {/* <div>
            <Label className="block text-sm font-medium text-gray-700">
              Title
            </Label>
            <Input
              type="text"
              id="title"
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              placeholder="Enter a title for your review"
              {...register("title")}
            />
            {errors.title && (
              <InputErrorMessage>{errors.title.message}</InputErrorMessage>
            )}
          </div> */}

          {/* Comments Field */}
          <div>
            <Label className="block text-sm font-medium text-gray-700">
              Comments
            </Label>
            <Textarea
              id="comments"
              rows={4}
              className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              placeholder="Write your review here..."
              {...register("comments")}
            ></Textarea>
            {errors.comments && (
              <InputErrorMessage>{errors.comments.message}</InputErrorMessage>
            )}
          </div>

          {/* Review Field */}
          <div>
            <Label className="block text-sm font-medium text-gray-700">
              Review
            </Label>
            <Rating
              transition
              allowFraction
              size={38}
              initialValue={rating}
              onClick={handleRating}
            />
            {errors.rating && (
              <InputErrorMessage>{errors.rating.message}</InputErrorMessage>
            )}
          </div>

          {/* Submit Button */}
          <ButtonPrimary
            type="submit"
            className="w-full px-4 py-2 text-white font-semibold rounded-md shadow-md transition"
          >
            Submit Review
          </ButtonPrimary>
        </form>
      </div>
    </div>
  );
};

export default ProductReviewForm;
