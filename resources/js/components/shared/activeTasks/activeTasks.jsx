import React, { useState } from "react";
import { usePage } from "@inertiajs/inertia-react";
import BasicCard from "./basicCard/basicCard";
import style from "./activeTasks.module.css";

const ActiveTasks = (props) => {
    const { ordersActive, tasksWithOrders } = usePage().props;
    const [showOrdersQty, setShowOrdersQty] = useState(props.count);
    const [ordersToShow, setOrdersToShow] = useState(ordersActive);

    function loadOrders(e) {
        e.preventDefault();
        setShowOrdersQty(showOrdersQty + props.count);
    }

    var showOrdersNum = ordersActive.slice(0, showOrdersQty);

    const changeSearch = ({ target: { value } }) => {
        if (value) {
            let job_found = tasksWithOrders.find((e) => e.name === value).id;
            if (job_found) {
                filterJobs(job_found);
            }
        }
    };

    function filterJobs(task_id) {
        let newOrdersToShow = ordersActive.filter(
            (el) => el.task_id === task_id
        );
        setOrdersToShow(newOrdersToShow);
        setShowOrdersQty(5);
    }
    return (
        <section className={style.container}>
            <h2 className={`${style.title}`}>Active Tasks</h2>
            <div className={`${style.cardsContainer}`}>
                {ordersToShow.slice(0, showOrdersQty).map((order) => {
                    return <BasicCard key={order.id} props={order} />;
                })}
            </div>

            {ordersToShow.length > showOrdersQty && (
                <button className={style.btn} onClick={loadOrders}>
                    View more
                </button>
            )}
        </section>
    );
};

export default ActiveTasks;
