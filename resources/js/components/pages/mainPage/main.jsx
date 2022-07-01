import React, { useRef } from "react";
import MakeOrder from "./makeOrder/makeOrder";
import { myJson } from "../../../mocks/review-data";
import TalksContainer from "./talksContainer/talksContainer";
import Projects from "./projects/projects";
import AboutContainer from "./aboutUs/aboutUs";
import MainHeader from "./mainHeader/mainHeader";
import Footer from "@/components/shared/footer/footer";
import ActiveTasks from "@/components/shared/activeTasks/activeTasks";
import FreelancersContainer from "./freelancers/freelancers";
import MainStart from "./mainStart/mainStart";
import style from "./main.module.css";

const Main = (props) => {
    const makeOrder = useRef(null);
    const scroll = () => makeOrder.current.scrollIntoView();

    return (
        <div className="container">
            <section className={`${style.headerContainer} sectionContainer`}>
                <MainHeader role={props.auth.user && props.auth.user.role} />

                <MainStart scroll={scroll} />
            </section>

            <ActiveTasks count={6} />

            <Projects portfolioList={myJson.portfolio} />

            <FreelancersContainer reviewsList={myJson.reviews} />

            <TalksContainer reviewsList={myJson.reviews} />

            <div ref={makeOrder} user={props.auth.user} className="about-form">
                <AboutContainer />
                <MakeOrder />
            </div>

            <Footer />
        </div>
    );
};
export default Main;
