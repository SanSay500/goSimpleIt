import React, { useRef } from "react";
import MakeOrder from "./makeOrder/makeOrder";
import { myJson } from "../../../mocks/review-data"; //mocks/review-data.js";
import ReviewContainer from "./reviewContainer/reviewContainer";
import PortfolioContainer from "./portfolioContainer/portfolioContainer";
import AboutUs from "./aboutUs/aboutUs";
import MainHeader from "./mainHeader/mainHeader";
import Footer from "@/components/shared/footer/footer";
import ActiveTasks from "@/components/shared/activeTasks/activeTasks";

const Main = (props) => {
    const myRef = useRef(null);
    const executeScroll = () => myRef.current.scrollIntoView();

    return (
        <>
            <MainHeader role={props.auth.user && props.auth.user.role} />

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

            <MakeOrder user={props.auth.user} />

            <ActiveTasks />

            <ReviewContainer reviewsList={myJson.reviews} />

            <AboutUs />

            <Footer />
        </>
    );
};
export default Main;
