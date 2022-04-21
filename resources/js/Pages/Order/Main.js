import React from "react";
import { useState } from "react";
import Reviews from "./Reviews";
import Create from "@/Pages/Order/Create";
import { COUNT_REVIEWS_LOADED } from "../../types.js";
import { myJson } from "../../mocks/review-data.js";

const Main = () => {
    const [step, setStep] = useState(COUNT_REVIEWS_LOADED);

return (
         <div className="mt-20">

               < Create />

                <div className="reviews-wrapper">

                    <Reviews reviews={myJson.reviews.slice(0, step)} />

                    {myJson.reviews.length > step ? (
                        <div className="review__more">
                        <button
                          className="review__button"
                          type="button"
                          onClick={() => setStep(step + COUNT_REVIEWS_LOADED)}
                        >
                          Show more
                        </button>
                      </div>
                    ) : (
                        ""
                    )}
                </div>
    </div>
    );
};
export default Main;
