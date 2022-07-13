import React, { useEffect, useRef, useState } from "react";
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
import SectionContainer from "@/components/shared/sectionContainer/sectionContainer";
import style from "./main.module.css";

const Main = (props) => {
    const makeOrder = useRef(null);
    const [quantityCardsTasks, setQuantityCards] = useState(6);
    const [quantityCardsProjects, setQuantityCardsProjects] = useState(3);
    const [quantityCardsPeople, setQuantityCardsPeople] = useState(3);

    const resizeHandler = () => {
        let clientWidth = window.innerWidth;

        if (clientWidth < 577) {
            setQuantityCards(() => 1);
            setQuantityCardsProjects(1);
            setQuantityCardsPeople(1);
            return;
        }
        if (clientWidth > 1024) {
            setQuantityCards(() => 6);
            setQuantityCardsProjects(3);
            setQuantityCardsPeople(3);
            return;
        }
        if (clientWidth < 1025) {
            setQuantityCards(() => 4);
            setQuantityCardsProjects(2);
            setQuantityCardsPeople(2);
            return;
        }

        // setStepPrev(0);
        // setStepNext(count_project);
    };

    const scroll = () => makeOrder.current.scrollIntoView();

    useEffect(() => {
        window.addEventListener("resize", resizeHandler);
        resizeHandler();
    }, []);

    return (
        <>
            <SectionContainer
                section={`${style.headerContainer}`}
                container={`${style.bgrImg}`}
            >
                <Header role={props.auth.user && props.auth.user.role} />

                <MainStart scroll={scroll} />
            </SectionContainer>

            <SectionContainer section={`${style.sectionActive}`}>
                <ActiveTasks
                    user={props.auth.user}
                    quantityCardsTasks={quantityCardsTasks}
                    gridStyle={style.gridStyle}
                />
            </SectionContainer>

            <SectionContainer section={`${style.sectionProject}`}>
                <Projects
                    quantityCardsProjects={quantityCardsProjects}
                    portfolioList={myJson.portfolio}
                />
            </SectionContainer>

            <SectionContainer section={`${style.sectionFreelancers}`}>
                <Freelancers
                    quantityCardsPeople={quantityCardsPeople}
                    reviewsList={myJson.reviews}
                />
            </SectionContainer>

            <SectionContainer section={`${style.sectionTalks}`}>
                <Talks
                    quantityCardsPeople={quantityCardsPeople}
                    reviewsList={myJson.reviews}
                />
            </SectionContainer>

            <SectionContainer>
                <div
                    user={props.auth.user}
                    className={`${style.blockContainer}`}
                >
                    <AboutUs />
                    <MakeOrder refMakeOrder={makeOrder} />
                </div>
            </SectionContainer>

            <Footer />
        </>
    );
};
export default Main;
