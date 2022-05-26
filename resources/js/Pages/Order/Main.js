import React, {useRef} from "react";
import Create from "@/Pages/Order/Create";
import { myJson } from "../../mocks/review-data.js";
import ReviewContainer from "./review-container";
import PortfolioContainer from "./portfolio-container";
import AboutContainer from "./about-container";
import HeaderContainer from "@/Components/header.js";
import Footer from "@/Components/footer.js";
import { InertiaLink, Link } from "@inertiajs/inertia-react";

const Main = (props) => {
    const myRef = useRef(null);

    const executeScroll = () => myRef.current.scrollIntoView() ;
    return (
        <>
            <HeaderContainer user={props.auth.user}/>
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
            <PortfolioContainer portfolioList={myJson.portfolio} />
            <ReviewContainer reviewsList={myJson.reviews} />
            <AboutContainer />
            {/* <div className="container flex flex-col justify-center mx-auto">
                <div>
                    <h1 className="mb-8 text-3xl font-bold">
                        <InertiaLink
                            href={route("index")}
                            className="text-indigo-600 hover:text-indigo-700"
                        >
                            Orders
                        </InertiaLink>
                        <span className="font-medium text-indigo-600"> / </span>
                        Create
                    </h1>
                </div> */}

            <Create user={props.auth.user} ref={myRef}/>
            <Footer/>


            {/*
            </div> */}
        </>
    );
};
export default Main;
