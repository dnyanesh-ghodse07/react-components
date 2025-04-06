import { useEffect, useState } from "react";
import { GrStarOutline } from "react-icons/gr";

interface StarRatingProps {
  numOfStars?: 3 | 5;
  handleOnChange: (rating: number) => void;
  reset: boolean;
}

const StarRating = ({ numOfStars = 5, handleOnChange, reset=false }: StarRatingProps) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  useEffect(() => {
    if(handleOnChange) handleOnChange(rating);
  }, [rating, handleOnChange]);

  // Reset effect
  useEffect(() => {
    if (reset) {
      setRating(0);
      setHover(0);
    }
  }, [reset]);
  return (
    <div className="flex items-center space-x-2">
      {Array(numOfStars).fill(0)?.map((_, i) => (
        <span
          key={i}
          onClick={() => setRating(i + 1)}
          onMouseEnter={() => setHover(i + 1)}
          onMouseLeave={() => setHover(0)}
        >
          <GrStarOutline
            size={30}
            color={i < (hover || rating) ? "#FFD700" : "gray"}
          />
        </span>
      ))}
    </div>
  );
};

export default StarRating;
