import React from "react";
import { Link } from "@inertiajs/inertia-react";
import ButtonViewMore from "../../buttonViewMore/buttonViewMore";
import style from "./basicCard.module.css";

export default function BasicCard(props) {
    return (
        <div className={`${style.container}`}>
            <h3 className={`${style.title}`}>{props.props["title"]}</h3>

            <div className={`${style.description}`}>
                {props.props["description"]}
            </div>

            <div className={`${style.file}`}>
                {props.props["filesize"] && (
                    <span className={`${style.fileInfo}`}>
                        <a
                            className={`${style.fileInfo} ${style.green}`}
                            href={"../storage/" + props.props["file"]}
                            download
                        >
                            Download{" "}
                        </a>
                        ({props.props["file"].split(".")[1]},{" "}
                        {props.props["filesize"]})
                    </span>
                )}
            </div>

            <div className={style.bottomContainer}>
                <div className={style.bottomContainerText}>
                    Budget:
                    <span className={style.green}>
                        {" "}
                        {props.props["money"]}$
                    </span>
                </div>
                <div className={style.bottomContainerText}>
                    Term:
                    <span className={style.green}>
                        {" "}
                        {props.props["hours"]}h
                    </span>
                </div>
            </div>

            <Link href={route("order.details", [props.props["id"]])}>
                {/* {props.user ? ( */}
                {/* // props.user.role === "Freelancer" ? ( */}
                <ButtonViewMore classes={props.classes} />
                {/* ) : ( */}
                {/* <></> */}
                {/* ) */}
                {/* ) : ( */}
                {/* <></> */}
                {/* )} */}
            </Link>
        </div>
    );
}
