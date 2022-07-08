import { useState, useEffect } from "react";
import style from "./projects.module.css";
import FlipCard from "./flipCard/flipCard";
import SectionContainer from "@/components/shared/sectionContainer/sectionContainer";

const Projects = ({ portfolioList }) => {
    let count_project = 0;
    let width = window.innerWidth;

    if (width > 1024) {
        count_project = 3;
    } else {
        if (width > 576) {
            count_project = 2;
        } else {
            count_project = 1;
        }
    }

    const [stepNext, setStepNext] = useState(count_project);
    const [stepPrev, setStepPrev] = useState(0);

    const projects = portfolioList.slice(stepPrev, stepNext);

    const resizeHandler = () => {
        let clientWidth = window.innerWidth;

        if (clientWidth > 1024) {
            count_project = 3;
        } else {
            if (clientWidth > 576) {
                count_project = 2;
            } else {
                count_project = 1;
            }
        }

        setStepPrev(0);
        setStepNext(count_project);
    };

    useEffect(() => {
        window.addEventListener("resize", resizeHandler);
        resizeHandler();

        return () => {
            window.removeEventListener("resize", resizeHandler);
        };
    }, []);

    return (
        <SectionContainer section={`${style.section}`}>
            <h2 className={`title`}>Complete projects</h2>

            <div className={`${style.cardsContainer}`}>
                {projects.map((element, index) => (
                    <FlipCard key={index} card={element} />
                ))}
            </div>
        </SectionContainer>

        /*                 {stepPrev > 0 ? (
                    <div className="review__more">
                        <button
                            className="review__button"
                            type="button"
                            onClick={() => {
                                setStepNext(stepPrev);
                                if (stepPrev - count_project < 0) {
                                    setStepPrev(0);
                                } else {
                                    setStepPrev(stepPrev - count_project);
                                }
                            }}
                        >
                            Prev page
                        </button>
                    </div>
                ) : (
                    ""
                )}
                {portfolioList.length > stepNext ? (
                    <div className="review__more">
                        <button
                            className="review__button"
                            type="button"
                            onClick={() => {
                                setStepPrev(stepNext);
                                setStepNext(stepNext + count_project);
                            }}
                        >
                            Next page
                        </button>
                    </div>
                ) : (
                    ""
                )}
            </div> } */
    );
};
export default Projects;
