import React, { useState } from "react";
import { usePage } from "@inertiajs/inertia-react";
import BasicCard from "./basicCard/basicCard";
import style from "./activeTasks.module.css";
import ButtonViewMore from "../buttonViewMore/buttonViewMore";

const ActiveTasks = ({ count, classes }) => {
    const { ordersActive, tasksWithOrders } = usePage().props;
    const [showOrdersQty, setShowOrdersQty] = useState(count);
    const [ordersToShow, setOrdersToShow] = useState(ordersActive);

    function loadOrders(e) {
        e.preventDefault();
        setShowOrdersQty(showOrdersQty + count);
    }

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
    //     setShowOrdersQty(5);
    // }

    return (
        <section className={`sectionContainer ${style.section}`}>
            <div className={`container `}>
                <h2 className={`title`}>Active Tasks</h2>
                <div className={`${style.cardsContainer} ${classes}`}>
                    {ordersToShow.slice(0, showOrdersQty).map((order) => {
                        return <BasicCard key={order.id} props={order} />;
                    })}
                </div>

                {ordersToShow.length > showOrdersQty && (
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

export default ActiveTasks;
