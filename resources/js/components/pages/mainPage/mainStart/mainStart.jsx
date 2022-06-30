import React from "react";
import style from "./mainStart.module.css";
import ButtonGreen from "@/components/shared/buttonGreen/buttonGreen";

const MainStart = (props) => {
    return (
        <div className={`${style.container}`}>
            <div className={`${style.leftBlock}`}>
                <h2 className={`${style.title}`}>
                    Find the perfect freelance services for your business
                </h2>
                <ButtonGreen>Estimate your budget</ButtonGreen>
            </div>

            <button className={`${style.getStartedBtn}`} onClick={props.scroll}>
                <img src="/images/getStarted.png" alt="Logo"></img>
            </button>
        </div>
    );
};

export default MainStart;
