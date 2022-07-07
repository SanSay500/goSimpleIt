import React from "react";
import style from "./buttonGreen.module.css";

export default function ButtonGreen({
    type = "submit",
    className = "",
    processing,
    children,
    click,
}) {
    return (
        <button
            type={type}
            className={`${style.formBtn} `}
            disabled={processing}
            onClick={click}
        >
            {children}
        </button>
    );
}
