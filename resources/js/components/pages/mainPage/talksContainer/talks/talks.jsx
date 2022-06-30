import style from "./talks.module.css";

const Talks = ({ reviews }) => {
    return (
        <>
            <h2 className={style.talks}>Talks about us</h2>

            <ul className={style.reviewsList}>
                {reviews.map((element, index) => (
                    <li
                        key={index}
                        className={`reviews-list__item ${style.review}`}
                    >
                        <div className={`user-block ${style.user}`}>
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
        </>
    );
};

export default Talks;