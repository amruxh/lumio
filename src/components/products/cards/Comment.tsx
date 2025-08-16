import { Comment } from "@/types";
import RatingStars from "./RatingStars";

const CommentCard = ({ rating, comment, date, reviewerName, reviewerEmail }: Comment) => {
  return (
    <div className="w-full flex-1 p-4 rounded-2xl border border-[var(--border)] bg-[var(--background-alt)]">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold text-[var(--foreground)]">{reviewerName}</h3>
        <span className="text-sm text-gray-500">{date}</span>
      </div>

      <p className="text-sm text-gray-500 mb-4">{reviewerEmail}</p>

      {/* <!-- Star Rating --> */}
      <div className="product-rating text-sm flex">
        <RatingStars
          className="inline-flex gap-1"
          rating={Math.round(rating)}
        />
        <span className="tracking-wider pl-3 text-[var(--foreground-muted)]">
          ({rating} rating)
        </span>
      </div>

      {/* <!-- Comment Text --> */}
      <p className="text-[var(--foreground)] text-base italic">{comment}</p>
    </div>
  );
};

export default CommentCard;
