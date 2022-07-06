import React from "react";
import style from "./container.module.css";
import Header from "../header/header";
import SectionContainer from "../sectionContainer/sectionContainer";
import Footer from "@/components/shared/footer/footer";

export default function Container({ children, styleBtn, styleContainer }) {
    return (
        <div className={style.wrp}>
            <SectionContainer
                section={style.section}
                container={style.container}
            >
                <Header styleBtn={styleBtn} />
            </SectionContainer>

            <SectionContainer
                section={style.content}
                container={`${styleContainer} ${style.contentContainer}`}
            >
                {children}
            </SectionContainer>

            <Footer />
        </div>
    );
}
