import React, { useRef } from "react";
import Create from "@/Pages/Order/Create";
import { myJson } from "../../mocks/review-data.js";
import ReviewContainer from "./review-container";
import PortfolioContainer from "./portfolio-container";
import AboutContainer from "./about-container";
import HeaderContainer from "@/Components/header.js";
import Footer from "@/Components/footer.js";
import { InertiaLink, Link } from "@inertiajs/inertia-react";
import ActiveOrders from "@/Pages/ActiveOrders";
import GoToOrder from "@/Pages/Order/GoToOrder";
import FreelancersContainer from "../components/pages/mainPage/freelancersContainer/freelansersContainer";
import "../../../css/main1.css";

const Main = (props) => {
    const myRef = useRef(null);
    const executeScroll = () => myRef.current.scrollIntoView();

    return (
        <>
            <section className="hero">
                <HeaderContainer
                    role={props.auth.user && props.auth.user.role}
                />

                <div className="container mx-auto">
                    <div className="hero-wrapper">
                        <h2 className="hero-title">
                            Find the perfect freelance business
                        </h2>
                        <div className="hero-budjet">
                            <button
                                onClick={executeScroll}
                                className="hero-budjlink link"
                            >
                                <img src="/images/budjet.png" alt="Logo"></img>
                            </button>
                        </div>
                        <div className="hero-wrapper">
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
                </div>
            </section>

            <PortfolioContainer portfolioList={myJson.portfolio} />

            <div ref={myRef} />

            <ActiveOrders />

            <FreelancersContainer reviewsList={myJson.reviews} />
            <ReviewContainer reviewsList={myJson.reviews} />

            <div className="about-form">
                <AboutContainer />
                <Create user={props.auth.user} />
            </div>

            <Footer />
        </>
    );
};
export default Main;
