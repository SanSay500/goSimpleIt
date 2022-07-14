import { useState, useEffect } from "react";
import style from "./talks.module.css";
import PeopleCard from "@/components/shared/peopleCard/peopleCard";
import ButtonViewMore from "@/components/shared/buttonViewMore/buttonViewMore";

const Talks = ({ reviewsList, quantityCardsPeople }) => {
    const [showCards, setShowCards] = useState(quantityCardsPeople);
    const freelancersList = reviewsList.slice(0, showCards);

    const loadMoreTasks = (e) => {
        e.preventDefault();
        setShowCards(showCards + quantityCardsPeople);
    };

    useEffect(() => {
        setShowCards(quantityCardsPeople);
    }, [quantityCardsPeople]);

    return (
        <>
            <h3 className={`title ${style.title}`}>Talks about us</h3>

            <div className={style.cardsList}>
                {freelancersList.map((freelancer, i) => (
                    <PeopleCard key={i} freelancer={freelancer} />
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
export default Talks;
