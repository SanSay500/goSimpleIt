import React, { useRef } from "react";
import MakeOrder from "./makeOrder/makeOrder";
import { myJson } from "../../../mocks/review-data";
import Talks from "./talks/talks";
import Projects from "./projects/projects";
import AboutUs from "./aboutUs/aboutUs";
import Header from "@/components/shared/header/header";
import Footer from "@/components/shared/footer/footer";
import ActiveTasks from "@/components/shared/activeTasks/activeTasks";
import Freelancers from "./freelancers/freelancers";
import MainStart from "./mainStart/mainStart";
import style from "./main.module.css";

const Main = (props) => {
    const makeOrder = useRef(null);
    const scroll = () => makeOrder.current.scrollIntoView();

    return (
        <>
            <section className={`sectionContainer ${style.headerContainer}`}>
                <div className={`container ${style.bgrImg}`}>
                    <Header role={props.auth.user && props.auth.user.role} />

                    <MainStart scroll={scroll} />
                </div>
            </section>

            <ActiveTasks count={6} />

            <Projects portfolioList={myJson.portfolio} />

            <Freelancers reviewsList={myJson.reviews} count={3} />

            <Talks reviewsList={myJson.reviews} count={3} />

            <div
                ref={makeOrder}
                user={props.auth.user}
                className={`sectionContainer ${style.blockContainer}`}
            >
                <AboutUs />
                <MakeOrder />
            </div>

            <Footer />
        </>
    );
};
export default Main;
