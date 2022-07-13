import React, { useEffect, useState, useRef } from "react";
import { usePage } from "@inertiajs/inertia-react";
import BasicCard from "./basicCard/basicCard";
import style from "./activeTasks.module.css";
import ButtonViewMore from "../buttonViewMore/buttonViewMore";

const ActiveTasks = ({ user, quantityCardsTasks, gridStyle }) => {
    const { ordersActive, tasksWithOrders } = usePage().props;
    const [showCards, setShowCards] = useState(quantityCardsTasks);
    const inputTask = useRef();
    const [ordersFiltered, setOrdersFiltered] = useState(ordersActive);
    let [tasksList, setTasksList] = useState(tasksWithOrders );
    let [open, setOpen] = useState(false);

    const loadMoreTasks = (e) => {
        e.preventDefault();
        setShowCards(showCards + quantityCardsTasks);
    };

    function searchList() {
        setTasksList(() => {
            tasksList = [];
            tasksList = tasksWithOrders.filter((el) =>
                el.name
                    .toLowerCase()
                    .includes(inputTask.current.value.toLowerCase())
            );
            return tasksList;
        });
    }

    function filterJobs(task_id) {
        if (task_id === 0) {
            setOrdersFiltered(ordersActive);
            setTasksList(tasksWithOrders);
            inputTask.current.value = 'Type the task';
        } else {
            setOrdersFiltered(
                ordersActive.filter((el) => el.task_id === task_id)
            );
        }
    }

    useEffect(() => {
        setTasksList(() => tasksList);
    }, [tasksList]);

    useEffect(() => {
        setShowCards(quantityCardsTasks);
    }, [quantityCardsTasks]);

    return (
        <>
            <h2 className={`title`}>Active Tasks</h2>
            <div className={style.searchJob}>
                <input
                    ref={inputTask}
                    type="text"
                    id="searchInput"
                    className={style.searchInput}
                    placeholder="Type the task"
                    onChange={searchList}
                    onBlur={() => {
                        setOpen((open) => !open);
                    }}
                    onClick={() => {
                        setOpen(() => (open = true));
                    }}
                />

                {open && (
                    <div id="inputList" className={style.inputList}>
                        <div
                            onMouseDown={() => {
                                inputTask.current.value = "Show all";
                                filterJobs(0);
                            }}
                            key={"show-all-orders"}
                        >
                            Show all
                        </div>
                        {tasksList.map((task) => (
                            <div
                                onMouseDown={() => {
                                    inputTask.current.value = task.name;
                                    filterJobs(task.id);
                                }}
                                key={task.id}
                            >
                                {task.name}
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className={`${style.cardsContainer} ${gridStyle}`}>
                {ordersFiltered.slice(0, showCards).map((order) => {
                    return (
                        <BasicCard user={user} key={order.id} props={order} />
                    );
                })}
            </div>

            {ordersFiltered.length >= showCards && (
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
