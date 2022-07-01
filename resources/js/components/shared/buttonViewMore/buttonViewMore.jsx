import React from "react";
import style from "./buttonViewMore.module.css";

const ButtonViewMore = ({ click, classes }) => {
    return (
        <button className={`${style.btn} ${classes}`} onClick={click}>
            View more
        </button>
    );
};

export default ButtonViewMore;
