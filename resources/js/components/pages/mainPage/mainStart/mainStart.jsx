import React from "react";
import style from "./mainStart.module.css";

const MainStart = (props) => {
    return (
        <div className={`container mx-auto ${style.container}`}>
            <div className={`${style.leftBlock}`}>
                <h2 className={`${style.title}`}>
                    Find the perfect freelance services for your business
                </h2>
                <button className={`${style.budgetBtn}`}>
                    <img src="/images/budget.png" alt="Logo"></img>
                </button>
            </div>

            <button className={`${style.getStartedBtn}`}>
                <img src="/images/getStarted.png" alt="Logo"></img>
            </button>
        </div>
    );
};

export default MainStart;
