import { useState } from 'react';
import Header from '../../../components/UI/Header';
import StarRating from '../../../components/StarRating/StarRating';
import { BiReset } from 'react-icons/bi';


const StarRatingPage = () => {
  const [rating, setRating] = useState<number | null>(null);
  const [reset,setReset] = useState(false);

  const handleOnChange = (star: number) => {
    setRating(star)
  }

  const handleReset = () => {
    setReset(true)
    setTimeout(() => {
      setReset(false)
    }
    , 0)
  }

  const ratings: Record<number, string> = {
    1: 'Very Bad',
    2: 'Bad',
    3: 'Average',
    4: 'Good',
    5: 'Excellent'
  }

  return (
    <div>
        <Header title="Star Rating" githubLink="https://github.com/dnyanesh-ghodse07/react-components/blob/main/src/components/StarRating/StarRating.tsx"/>
        <div className='flex flex-col gap-4 items-center justify-center'>
        <p className='text-center'><span className='font-semibold'>{ratings[rating as number] ?? 'Give Us Rating'}</span></p>
        <div className='p-2 flex items-center justify-center my-2'>
        <StarRating handleOnChange={handleOnChange} reset={reset}/>
        </div>
        <button onClick={handleReset}>
          <BiReset className='text-blue-500' size={20}/>
        </button>
        </div>
        
    </div>
  )
}

export default StarRatingPage