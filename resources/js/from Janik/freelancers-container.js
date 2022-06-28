import Freelancers from './Freelancers'
import { useState } from 'react'
import '@/../css/freelancers.css'

const FreelancersContainer= ({reviewsList}) => {
  let count_review=0;
  let width=window.innerWidth;
  if (width > 1024) {
    count_review=3;
  } else{ if(width > 576){
    count_review=2;
  } else {
    count_review=1;
  }}
    const [step, setStep] = useState(count_review);

    return(
      <section className="reviews-block">
      <div className="container">
        <div className="reviews-wrapper">
                    <Freelancers reviews={reviewsList.slice(0, step)} />
                    <div className='btn-container'>
                    {reviewsList.length > step
                      ? (
                        <div className="review__more">
                        <button
                          className="review__button"
                          type="button"
                          onClick={() => setStep(step + count_review)}
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
                </div>
    </section>
    )
}
export default FreelancersContainer;
