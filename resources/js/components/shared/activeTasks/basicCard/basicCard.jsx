import React from "react";
import style from "./basicCard.module.css";

export default function BasicCard(props) {
    return (
        <div className={`${style.container}`}>
            <h3 className={`${style.title}`}>{props.props["title"]}</h3>

            <div className={`${style.description}`}>
                {props.props["description"]}
            </div>

            <div className={`${style.file}`}>
                {props.props["file"] && (
                    <span className={`${style.fileInfo}`}>
                        <a
                            className={`${style.fileInfo} ${style.green}`}
                            href={props.props["file"]}
                        >
                            Download{" "}
                        </a>
                        (jpg; 43.10 Kb)
                    </span>
                )}
            </div>

            <div className={style.bottomContainer}>
                <div className={style.budget}>
                    Budget:
                    <span className={style.green}>
                        {" "}
                        {props.props["money"]}$
                    </span>
                </div>
                <div className="basic-card__term">
                    Term:
                    <span className={style.green}>
                        {" "}
                        {props.props["hours"]}h
                    </span>
                </div>
            </div>
        </div>
    );
}
