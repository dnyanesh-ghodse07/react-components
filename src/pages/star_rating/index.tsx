import { useState } from 'react';
import StarRating from '../../components/StarRating/StarRating'
import Header from '../../components/UI/Header';


const StarRatingPage = () => {
  const [rating, setRating] = useState<number | null>(null);

  const handleOnChange = (star: number) => {
    setRating(star)
  }
  return (
    <div>
        <Header title="Star Rating" githubLink="https://github.com/dnyanesh-ghodse07/react-components/blob/main/src/components/StarRating/StarRating.tsx"/>
        <p>You Rated: {rating}</p>
        <div className='p-2 flex items-center justify-center my-2'>
        <StarRating handleOnChange={handleOnChange}/>
        </div>
    </div>
  )
}

export default StarRatingPage