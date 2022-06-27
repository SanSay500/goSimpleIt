const Freelancers = ({reviews}) => {
    return (
        <>
            <h3 className="freelancers-title">Best freelancers</h3>
            <ul className="reviews-list">
            {reviews.map((element, index) => (
                <li key={index} className="reviews-list__item review">
                    <div className="user-block user">
                        <div className="user-img">
                            <img
                                className="user__img"
                                src={element.user.avatar}
                                alt={element.user.name} />
                        </div>

                    </div>
                    <div className="coments-block coment">
                        <h4 className="user__name">{element.user.name}</h4>
                        <p className="coment-text">{element.commets}</p>
                    </div>
                </li>
            ))}
            </ul>
        </>
    )
}

export default Freelancers