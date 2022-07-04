import { useState } from "react";
import style from "./talks.module.css";
import PeopleCard from "@/components/shared/peopleCard/peopleCard";
import ButtonViewMore from "@/components/shared/buttonViewMore/buttonViewMore";

const Talks = ({ reviewsList, count }) => {
    const [showOrdersQty, setShowOrdersQty] = useState(count);
    const freelancersList = reviewsList.slice(0, showOrdersQty);

    function loadOrders(e) {
        e.preventDefault();
        setShowOrdersQty(showOrdersQty + count);
    }

    return (
        <section className={`sectionContainer ${style.section}`}>
            <div className={`container`}>
                <h3 className={`title ${style.title}`}>Talks about us</h3>

                <div className={style.cardsList}>
                    {freelancersList.map((freelancer, i) => (
                        <PeopleCard key={i} freelancer={freelancer} />
                    ))}
                </div>

                {reviewsList.length > showOrdersQty && (
                    <ButtonViewMore
                        click={(e) => {
                            loadOrders(e);
                        }}
                    />
                )}
            </div>
        </section>
    );
};
export default Talks;
