import React from "react";
import style from "./peopleCard.module.css";

const PeopleCard = (props) => {
    return (
        <div className={`${style.card} ${props.classes}`}>
            <div className={style.imgBlock}>
                <div className={style.imgContainer}>
                    <img
                        className={style.img}
                        src={props.freelancer.user.avatar}
                        alt={props.freelancer.user.name}
                    />
                </div>
            </div>

            <div>
                <h4 className={style.userName}>{props.freelancer.user.name}</h4>
                <p className={style.text}>{props.freelancer.commets}</p>
            </div>
        </div>
    );
};

export default PeopleCard;
