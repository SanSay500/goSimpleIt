import React, { useRef } from "react";
import Create from "../../../Pages/Order/Create";
import { myJson } from "../../../mocks/review-data"; //mocks/review-data.js";
import ReviewContainer from "../../../Pages/Main/review-container";
import PortfolioContainer from "../../../Pages/Main/portfolio-container";
import AboutContainer from "../../../Pages/Main/about-container";
import HeaderContainer from "@/components/header.js";
import Footer from "@/components/footer.js";
import { InertiaLink, Link } from "@inertiajs/inertia-react";
import ActiveOrders from "@/Pages/ActiveOrders";

const Main = (props) => {
    const myRef = useRef(null);
    const executeScroll = () => myRef.current.scrollIntoView();

    return (
        <>
            <HeaderContainer role={props.auth.user && props.auth.user.role} />

            <section className="hero">
                <div className="container mx-auto">
                    <div className="hero-wrapper">
                        <h2 className="hero-title">
                            Find the perfect freelance business
                        </h2>
                        <div className="hero-cont">
                            <button
                                onClick={executeScroll}
                                className="hero-link link"
                            >
                                Place an order
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <PortfolioContainer portfolioList={myJson.portfolio} />

            <div ref={myRef} />
            <Create user={props.auth.user} />
            <ActiveOrders />
            <ReviewContainer reviewsList={myJson.reviews} />
            <AboutContainer />
            <Footer />
        </>
    );
};
export default Main;
