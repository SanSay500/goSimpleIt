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
import GoToOrder from "@/Pages/Order/GoToOrder";

const Main = (props) => {
    const myRef = useRef(null);
    return (
        <>
            <HeaderContainer user={props.auth.user}/>
            <GoToOrder ref={myRef}/>
            <PortfolioContainer portfolioList={myJson.portfolio} />
            <ReviewContainer reviewsList={myJson.reviews} />
            <AboutContainer />

            {props.auth.user && props.auth.user.role === 'Freelancer' &&
                <ActiveOrders/> }

            {props.auth.user && props.auth.user.role === 'Employer' &&
            <Create user={props.auth.user} ref={myRef}/>}

            <Footer/>
        </>
    );
};
export default Main;
