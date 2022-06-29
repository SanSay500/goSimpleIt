import React from "react";
import MakeOrder from "./makeOrder/makeOrder";
import { myJson } from "../../../mocks/review-data";
import TalksContainer from "./talksContainer/talksContainer";
import ProjectsContainer from "./projectsContainer/projectsContainer";
import AboutContainer from "./aboutUs/aboutUs";
import MainHeader from "./mainHeader/mainHeader";
import Footer from "@/components/shared/footer/footer";
import ActiveTasks from "@/components/shared/activeTasks/activeTasks";
import FreelancersContainer from "./freelancersContainer/freelancersContainer";
import MainStart from "./mainStart/mainStart";
import style from "./main.module.css";

const Main = (props) => {
    return (
        <div className="container">
            <section className={`${style.headerContainer}`}>
                <MainHeader role={props.auth.user && props.auth.user.role} />

                <MainStart />
            </section>

            <ActiveTasks />

            <ProjectsContainer portfolioList={myJson.portfolio} />

            <FreelancersContainer reviewsList={myJson.reviews} />
            <TalksContainer reviewsList={myJson.reviews} />

            <div className="about-form">
                <AboutContainer />
                <MakeOrder user={props.auth.user} />
            </div>

            <Footer />
        </div>
    );
};
export default Main;
