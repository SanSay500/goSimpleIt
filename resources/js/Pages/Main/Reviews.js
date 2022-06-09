const Reviews = ({ reviews }) => {
  return (
        <><h3 className="reviews-title title">Reviews</h3>
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

                        <h4 className="user__name">{element.user.name}</h4>
                    </div>
                    <div className="coments-block coment">
                        <p className="coment-text">{element.commets}</p>
                    </div>
                </li>
            ))}
        </ul>
        </>
  )
}

export default Reviews
