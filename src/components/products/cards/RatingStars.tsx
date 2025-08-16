import { Star } from "lucide-react";

interface RatingStarsProps extends React.HTMLAttributes<HTMLSpanElement> {
  rating: number | undefined;
}

const RatingStars = ({ rating, ...rest }: RatingStarsProps) => {
  const roundedRating = Math.round(rating ?? 0);
  const totalStars = 5;
  const filledStars = Array.from({ length: roundedRating }, (_, i) => (
    <Star
      key={`filled-${i}`}
      className="w-4 h-4 fill-yellow-500 text-yellow-500"
    />
  ));

  const emptyStars = Array.from({ length: totalStars - roundedRating }, (_, i) => (
    <Star key={`empty-${i}`} className="w-4 h-4 text-gray-600" />
  ));

  return (
    <span {...rest}>
      {filledStars}
      {emptyStars}
    </span>
  );
};

export default RatingStars;
