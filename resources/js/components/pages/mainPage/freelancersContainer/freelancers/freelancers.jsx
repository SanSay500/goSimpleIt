import style from '../freelancersContainer.module.css'

const Freelancers = ({reviews}) => {
    return (
        <>
            <h3 className={style.freelancersTitle}>Best freelancers</h3>
            <ul className={style.reviewsList}>
            {reviews.map((element, index) => (
                <li key={index} className={`reviews-list__item ${style.review}`}>
                    <div className="user-block user">
                        <div className={style.userImg}>
                            <img
                                className="user__img"
                                src={element.user.avatar}
                                alt={element.user.name} />
                        </div>

                    </div>
                    <div className={`coments-block ${style.coment}`}>
                        <h4 className={style.userName}>{element.user.name}</h4>
                        <p className={style.comentText}>{element.commets}</p>
                    </div>
                </li>
            ))}
            </ul>
        </>
    )
}

export default Freelancers