import React, { useEffect, useRef } from "react";
import style from "./input.module.css";

export default function Input({
    type = "text",
    name,
    value,
    className,
    autoComplete,
    required,
    isFocused,
    placeholder,
    handleChange,
    checked,
    id,
}) {
    const input = useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className={style.container}>
            <input
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                className={className}
                ref={input}
                autoComplete={autoComplete}
                required={required}
                onChange={(e) => handleChange(e)}
                checked={checked}
                id={id}
            />
        </div>
    );
}
