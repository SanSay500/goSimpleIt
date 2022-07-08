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
    const [quantityCards, setQuantityCards] = useState(6);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const resizeHandler = () => {
        // console.log(111);
        let clientWidth = window.innerWidth;

        if (clientWidth<769){
            setQuantityCards(()=> 4 )
            console.log(quantityCards);
        }
        
        // setStepPrev(0);
        // setStepNext(count_project);
    };

    useEffect(() => {
        window.addEventListener("resize", resizeHandler);
        resizeHandler();
    }, []);

    const scroll = () => makeOrder.current.scrollIntoView();


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
                <ActiveTasks quantityCards={quantityCards} gridStyle={style.gridStyle}/>
            </SectionContainer>
            
            <Projects portfolioList={myJson.portfolio} />

            <Freelancers reviewsList={myJson.reviews} count={3} />

            <Talks reviewsList={myJson.reviews} count={3} />
            <SectionContainer>
                <div
                    ref={makeOrder}
                    user={props.auth.user}
                    className={`${style.blockContainer}`}
                >
                    <AboutUs />
                    <MakeOrder />
                </div>
            </SectionContainer>

            <Footer />
        </>
    );
};
export default Main;
