import React, { useEffect, useState } from "react";
import { usePage } from "@inertiajs/inertia-react";
import BasicCard from "./basicCard/basicCard";
import style from "./activeTasks.module.css";
import ButtonViewMore from "../buttonViewMore/buttonViewMore";

const ActiveTasks = ({ quantityCardsTasks, gridStyle }) => {
    const { ordersActive, tasksWithOrders } = usePage().props;
    const [showCards, setShowCards] = useState(quantityCardsTasks);

    const loadMoreTasks = (e) => {
        e.preventDefault();
        setShowCards(showCards + quantityCardsTasks);
    };

    // const changeSearch = ({ target: { value } }) => {
    //     if (value) {
    //         let job_found = tasksWithOrders.find((e) => e.name === value).id;
    //         if (job_found) {
    //             filterJobs(job_found);
    //         }
    //     }
    // };

    // function filterJobs(task_id) {
    //     let newOrdersToShow = ordersActive.filter(
    //         (el) => el.task_id === task_id
    //     );
    //     setOrdersToShow(newOrdersToShow);
    //     setShowCards(5);
    // }

    useEffect(() => {
        setShowCards(quantityCardsTasks);
    }, [quantityCardsTasks]);

    return (
        <>
            <h2 className={`title`}>Active Tasks</h2>

            <div className={`${style.cardsContainer} ${gridStyle}`}>
                {ordersActive.slice(0, showCards).map((order) => {
                    return <BasicCard key={order.id} props={order} />;
                })}
            </div>

            {ordersActive.length > showCards && (
                <ButtonViewMore
                    click={(e) => {
                        loadMoreTasks(e);
                    }}
                />
            )}
        </>
    );
};

export default ActiveTasks;
