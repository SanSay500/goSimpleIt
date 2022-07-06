import { useState } from "react";
import style from "./freelancers.module.css";
import PeopleCard from "@/components/shared/peopleCard/peopleCard";
import ButtonViewMore from "@/components/shared/buttonViewMore/buttonViewMore";
import SectionContainer from "@/components/shared/sectionContainer/sectionContainer";
const Freelancers = ({ reviewsList, count }) => {
    const [showOrdersQty, setShowOrdersQty] = useState(count);
    const freelancersList = reviewsList.slice(0, showOrdersQty);

    function loadOrders(e) {
        e.preventDefault();
        setShowOrdersQty(showOrdersQty + count);
    }

    return (
        <SectionContainer section={`${style.section}`}>
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

            {reviewsList.length > showOrdersQty && (
                <ButtonViewMore
                    click={(e) => {
                        loadOrders(e);
                    }}
                />
            )}
        </SectionContainer>
    );
};

export default Freelancers;
