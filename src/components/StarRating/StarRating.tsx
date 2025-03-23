import { useState } from "react";
import { GrStarOutline } from "react-icons/gr";

const StarRating = ({ numOfStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const stars = Array(numOfStars).fill(0);
  return (
    <div className="flex items-center space-x-2">
      {stars.map((_, i) => (
        <span
          key={i}
          onClick={() => setRating(i + 1)}
          onMouseEnter={() => setHover(i + 1)}
          onMouseLeave={() => setHover(0)}
        >
          <GrStarOutline
            size={24}
            color={i < (hover || rating) ? "#FFD700" : "gray"}
          />
        </span>
      ))}
    </div>
  );
};

export default StarRating;
