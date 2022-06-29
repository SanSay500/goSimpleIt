import React from 'react';

export default function Checkbox({ name, value, handleChange, className }) {
    return (
        <input
            type="checkbox"
            name={name}
            value={value}
            className={
                `text-indigo-600 shadow-sm ` + className
            }
            onChange={(e) => handleChange(e)}
        />
    );
}
