import { useState } from "react";
import "@/../css/freelancers.css";
import style from "./freelancers.module.css";

const FreelancersContainer = ({ reviewsList }) => {
    let count_review = 0;
    let width = window.innerWidth;
    const freelancersList = reviewsList.slice(0, step);

    if (width > 1024) {
        count_review = 3;
    } else {
        if (width > 576) {
            count_review = 2;
        } else {
            count_review = 1;
        }
    }

    const [step, setStep] = useState(count_review);

    return (
        <section className="reviews-block">
            <div className={style.reviewsWrapper}>
                {/* <Freelancers reviews={reviewsList.slice(0, step)} /> */}
                <h3 className={style.freelancersTitle}>Best freelancers</h3>

                <ul className={style.reviewsList}>
                    {freelancersList.map((element, index) => (
                        <li
                            key={index}
                            className={`reviews-list__item ${style.review}`}
                        >
                            <div className="user-block user">
                                <div className={style.userImg}>
                                    <img
                                        className="user__img"
                                        src={element.user.avatar}
                                        alt={element.user.name}
                                    />
                                </div>
                            </div>

                            <div className={`coments-block ${style.coment}`}>
                                <h4 className={style.userName}>
                                    {element.user.name}
                                </h4>
                                <p className={style.comentText}>
                                    {element.commets}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>

                {/* <div className="btn-container">
                    {reviewsList.length > step ? (
                        <div className="review__more">
                            <button
                                className={style.reviewButton}
                                type="button"
                                onClick={() => setStep(step + count_review)}
                            >
                                Show more
                            </button>
                        </div>
                    ) : (
                        ""
                    )}
                </div> */}
            </div>
        </section>
    );
};
export default FreelancersContainer;
