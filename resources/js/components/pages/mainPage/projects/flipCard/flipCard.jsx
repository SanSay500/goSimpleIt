import style from "./flipCard.module.css";

function FlipCard({ card }) {
    return (
        <div className={`${style.container}`}>
            <div className={`${style.cardInner}`}>
                <div className={`${style.card} ${style.front}`}>
                    <img
                        className={`${style.img}`}
                        src={card.photo}
                        alt={card.name_project}
                    />
                </div>

                <div className={`${style.card} ${style.back}`}>
                    <a href={card.url_project}>
                        <h3 className={`${style.name}`}>{card.name_project}</h3>
                    </a>

                    <p className={`${style.text}`}>{card.description}</p>

                    <div>
                        <h4 className={`${style.devTitle}`}>
                            Development stack:
                        </h4>

                        <ul className={`${style.devList}`}>
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
