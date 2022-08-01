import React from "react";
import { Link } from "@inertiajs/inertia-react";
import ButtonViewMore from "../../buttonViewMore/buttonViewMore";
import style from "./basicCard.module.css";

export default function BasicCard(props) {
    return (
        <div className={`${style.container}`}>
            <h3 className={`${style.title}`}>{props.orders["title"]}</h3>

            <div className={`${style.description}`}>
                {props.orders["description"]}
            </div>

            <div className={`${style.file}`}>
                {props.orders["filesize"] && (
                    <span className={`${style.fileInfo}`}>
                        <a
                            className={`${style.fileInfo} ${style.green}`}
                            href={"../storage/" + props.orders["file"]}
                            download
                        >
                            Download{" "}
                        </a>
                        ({props.orders["file"].split(".")[1]},{" "}
                        {props.orders["filesize"]})
                    </span>
                )}
            </div>

            <div className={style.bottomContainer}>
                <div className={style.bottomContainerText}>
                    Budget:
                    <span className={style.green}>
                        {" "}
                        {props.orders["money"]} {props.symbolCurrency}
                    </span>
                </div>
                <div className={style.bottomContainerText}>
                    Term:
                    <span className={style.green}>
                        {" "}
                        {props.orders["hours"]} h
                    </span>
                </div>
            </div>

            <Link href={route("order.details", [props.orders["id"]])}>
                <ButtonViewMore classes={props.classes} />
            </Link>
        </div>
    );
}
