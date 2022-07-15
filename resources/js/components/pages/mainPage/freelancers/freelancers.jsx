import React, { useEffect, useState } from "react";
import style from "./freelancers.module.css";
import PeopleCard from "@/components/shared/peopleCard/peopleCard";
import ButtonViewMore from "@/components/shared/buttonViewMore/buttonViewMore";

const Freelancers = ({ reviewsList, quantityCardsPeople }) => {
    const [showCards, setShowCards] = useState(quantityCardsPeople);
    const freelancersList = reviewsList.slice(0, showCards);

    const loadMoreTasks = (e) => {
        e.preventDefault();
        setShowCards(() => showCards + quantityCardsPeople);
    };

    useEffect(() => {
        setShowCards(quantityCardsPeople);
    }, [quantityCardsPeople]);

    return (
        <>
            <h3 className={`title`}>Best freelancers</h3>

            <div className={style.cardsList}>
                {freelancersList.map((freelancer) => (
                    <PeopleCard
                        key={freelancer.user.id}
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
