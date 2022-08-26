import React from "react";
import { Link } from "@inertiajs/inertia-react";
import ButtonViewMore from "../../buttonViewMore/buttonViewMore";
import style from "./basicCard.module.css";


export default function BasicCard(props) {

    return (

        <div className={`${style.container}`}>
            <h3 className={`${style.title}`}>{props.order["title"]}</h3>

            <div className={`${style.description}`}>
                {props.order["description"]}
            </div>

            <div className={`${style.file}`}>
                {props.order["filesize"] && (
                    <span className={`${style.fileInfo}`}>
                        <a
                            className={`${style.fileInfo} ${style.green}`}
                            href={"../storage/" + props.order["file"]}
                            download
                        >
                            Download{" "}
                        </a>
                        ({props.order["file"].split(".")[1]},{" "}
                        {props.order["filesize"]})
                    </span>
                )}
            </div>

            <div className={style.bottomContainer}>
                <div className={style.bottomContainerText}>
                    Budget:
                    <span className={style.green}>
                        {" "}
                        {props.order["money"]} {props.symbolCurrency}
                    </span>
                </div>
                <div className={style.bottomContainerText}>
                    Term:
                    <span className={style.green}>
                        {" "}
                        {props.order["hours"]} d
                    </span>
                </div>
            </div>

            <Link href={route("order.details", [props.order["id"]])}>
                <ButtonViewMore classes={props.classes} />
            </Link>
        </div>
    );
}
