import { useState, useEffect } from "react";
import style from "./projects.module.css";
import FlipCard from "./flipCard/flipCard";
import ButtonViewMore from "@/components/shared/buttonViewMore/buttonViewMore";

const Projects = ({ portfolioList, quantityCardsProjects }) => {
    // const projects = portfolioList.slice(stepPrev, stepNext);
    const [showCards, setShowCards] = useState(quantityCardsProjects);

    const projects = portfolioList.slice(0, showCards);

        const loadMoreTasks = (e) => {
            e.preventDefault();
            setShowCards(showCards + quantityCardsProjects);
        };

    useEffect(() => {
        setShowCards(quantityCardsProjects);
    }, [quantityCardsProjects]);
    return (
        <>
            <h2 className={`title`}>Complete projects</h2>

            <div className={`${style.cardsContainer}`}>
                {projects.map((element, index) => (
                    <FlipCard key={index} card={element} />
                ))}
            </div>

            {portfolioList.length > showCards && (
                <ButtonViewMore
                    click={(e) => {
                        loadMoreTasks(e);
                    }}
                />
            )}
        </>
    );
};
export default Projects;
