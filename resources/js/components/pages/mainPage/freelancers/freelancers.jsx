import { useState } from "react";
import style from "./freelancers.module.css";
import PeopleCard from "@/components/shared/peopleCard/peopleCard";
import ButtonViewMore from "@/components/shared/buttonViewMore/buttonViewMore";
import SectionContainer from "@/components/shared/sectionContainer/sectionContainer";
const Freelancers = ({ reviewsList, quantityCardsPeople }) => {
    const [showCards, setShowCards] = useState(quantityCardsPeople);
    const freelancersList = reviewsList.slice(0, quantityCardsPeople);

    const loadMoreTasks = (e) => {
        e.preventDefault();
        setShowCards(showCards + quantityCardsPeople);
    };

    return (
        <>
            <h3 className={`title`}>Best freelancers</h3>

            <div className={style.cardsList}>
                {freelancersList.map((freelancer, i) => (
                    <PeopleCard
                        key={i}
                        freelancer={freelancer}
                        classes={style.card}
                    />
                ))}
            </div>

            {reviewsList.length > showCards && (
                <ButtonViewMore
                    click={(e) => {
                        loadMoreTasks(e);
                    }}
                />
            )}
        </>
    );
};

export default Freelancers;
