import React, { useRef } from "react";
import MakeOrder from "./makeOrder/makeOrder";
import { myJson } from "../../../mocks/review-data";
import ReviewContainer from "./reviewContainer/reviewContainer";
import PortfolioContainer from "./portfolioContainer/portfolioContainer";
import AboutContainer from "./aboutUs/aboutUs";
import HeaderContainer from "./mainHeader/mainHeader";
import Footer from "@/components/shared/footer/footer";
import { InertiaLink, Link } from "@inertiajs/inertia-react";
import ActiveOrders from "@/components/shared/activeTasks/activeTasks";
// import GoToOrder from "@/Pages/Order/GoToOrder";
import FreelancersContainer from "@/../js/from Janik/freelancers-container";
import "@/../css/main1.css";

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
                                    <img
                                        src="/images/getstarted.png"
                                        alt="Logo"
                                    ></img>
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
                <MakeOrder user={props.auth.user} />
            </div>

            <Footer />
        </>
    );
};
export default Main;
