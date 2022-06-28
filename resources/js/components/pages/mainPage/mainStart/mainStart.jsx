import React from "react";

const MainStart = (props) => {
    return (
        <div className="container mx-auto">
            <div className="hero-wrapper">
                <h2 className="hero-title">
                    Find the perfect freelance business
                </h2>
                <div className="hero-budget">
                    <button>
                        <img src="/images/budget.png" alt="Logo"></img>
                    </button>
                </div>

                <button>
                    <img src="/images/getstarted.png" alt="Logo"></img>
                </button>
            </div>
        </div>
    );
};

export default MainStart;
