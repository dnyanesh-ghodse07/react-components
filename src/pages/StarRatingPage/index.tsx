import { useState } from 'react';
import StarRating from '../../components/StarRating/StarRating'


const StarRatingPage = () => {
  const [rating, setRating] = useState<number | null>(null);

  const handleOnChange = (star: number) => {
    setRating(star)
  }
  return (
    <div>
        <h1 className='text-2xl mb-2'>Star Rating</h1>
        <p>You Rated: {rating}</p>
        <div className='p-2 flex items-center justify-center my-2'>
        <StarRating handleOnChange={handleOnChange}/>
        </div>
    </div>
  )
}

export default StarRatingPage