function FlipCard({ card }) {
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="card front">
                    <img
                        className="portfolio__img"
                        src={card.photo}
                        alt={card.name_project}
                    />
                </div>
                <div className="card back">
                    <a className="card-url" href={card.url_project}>
                        <h3 className="card-name">{card.name_project}</h3>
                    </a>
                    <p className="card-text">{card.description}</p>
                    <div className="card-dev">
                    <h4 className="card-dev__title">Development stack:</h4>
                    <ul className="card-dev-list">
                        {card.development_stack.map((element, index) => (
                            <li key={index}>{element}</li>
                        ))}
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FlipCard;
