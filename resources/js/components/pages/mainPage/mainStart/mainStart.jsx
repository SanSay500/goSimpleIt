import React from "react";
import style from "./mainStart.module.css";

const MainStart = (props) => {
    return (
        <div className={`${style.container}`}>
            <div className={`${style.leftBlock}`}>
                <h2 className={`${style.title}`}>
                    Find the perfect freelance services for your business
                </h2>
                <button>
                    <img src="/images/budget.png" alt="Logo"></img>
                </button>
            </div>

            <button className={`${style.getStartedBtn}`} onClick={props.scroll}>
                <img src="/images/getStarted.png" alt="Logo"></img>
            </button>
        </div>
    );
};

export default MainStart;
