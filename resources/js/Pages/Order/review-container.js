import { COUNT_REVIEWS_LOADED } from '../../types.js'
import Reviews from './Reviews'
import { useState } from 'react'
const ReviewContainer= ({reviewsList}) => {
    const [step, setStep] = useState(COUNT_REVIEWS_LOADED);

    return(
        <div className="reviews-wrapper">
                    <Reviews reviews={reviewsList.slice(0, step)} />
                    <div className='btn-container'>
                    {reviewsList.length > step
                      ? (
                        <div className="review__more">
                        <button
                          className="review__button"
                          type="button"
                          onClick={() => setStep(step + COUNT_REVIEWS_LOADED)}
                        >
                          Show more
                        </button>
                      </div>
                        )
                      : (
                          ''
                        )}
                        </div>
                </div>
    )
}
export default ReviewContainer;