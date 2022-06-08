import React, {useState, useEffect, useRef} from "react";

const GoToOrder = (props) => {
    const executeScroll = () => props.ref.current.scrollIntoView();

    return (

        <section className="hero">
        <div className="container mx-auto">
            <div className="hero-wrapper">
                <h2 className="hero-title">
                    Find the perfect freelance
                    business
                </h2>
                <div className="hero-cont">
                    <button onClick={executeScroll} className="hero-link link" >Place an order</button>
                </div>
            </div>
        </div>
    </section>
    );

};

export default GoToOrder;
