import React, {useRef} from "react";
import Create from "@/Pages/Order/Create";
import { myJson } from "../../mocks/review-data.js";
import ReviewContainer from "./review-container";
import PortfolioContainer from "./portfolio-container";
import AboutContainer from "./about-container";
import HeaderContainer from "@/Components/header.js";
import Footer from "@/Components/footer.js";
import { InertiaLink, Link } from "@inertiajs/inertia-react";
import ActiveOrders from "@/Pages/ActiveOrders";

const Main = (props) => {
    return (
        <>
            <HeaderContainer user={props.auth.user ?? '' }/>

            <PortfolioContainer portfolioList={myJson.portfolio} />

            {props.auth.user && props.auth.user.role === 'Employer' &&
                <Create user={props.auth.user}/>}

            <ActiveOrders/>

            <ReviewContainer reviewsList={myJson.reviews} />

            <AboutContainer />

            <Footer/>
        </>
    );
};
export default Main;
