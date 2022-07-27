import React, { useRef, useState, useEffect } from "react";
import { usePage } from "@inertiajs/inertia-react";
import style from "./mainStart.module.css";
import ButtonGreen from "@/components/shared/buttonGreen/buttonGreen";

const MainStart = (props) => {
    const { tasks } = usePage().props;

    const inputTask = useRef();
    const wrpModal = useRef();

    const [tasksList, setTasksList] = useState(tasks);
    const [open, setOpen] = useState(false);
    const [price, setPrice] = useState();

    const searchList = () => {
        setTasksList(() => []);

        setTasksList(() => {
            return tasks.filter((el) =>
                el.name
                    .toLowerCase()
                    .includes(inputTask.current.value.toLowerCase())
            );
        });
    };

    const setCloseModal = () => {
        wrpModal.current.classList.toggle(style.closeModal);
    };

    useEffect(() => {
        setTasksList(() => tasksList);
    }, [tasksList]);

    useEffect(() => {
        setPrice(() => price);
    }, [price]);

    return (
        <div className={`${style.container}`}>
            <div className={`${style.leftBlock}`}>
                <h2 className={`${style.title}`}>
                    Find the perfect freelance services for your business
                </h2>

                <ButtonGreen click={setCloseModal}>
                    Estimate your budget
                </ButtonGreen>
            </div>

            <button className={`${style.getStartedBtn}`} onClick={props.scroll}>
                <img src="/images/getStarted.png" alt="Logo"></img>
            </button>

            <div
                ref={wrpModal}
                className={`${style.wrp} ${style.closeModal}`}
                onClick={setCloseModal}
            >
                <div
                    className={style.formWrapper}
                    onClick={(e) => e.stopPropagation()}
                >
                    <h2 className={`title ${style.budgetTitle}`}>
                        Estimate your budget
                    </h2>

                    <div className={style.search}>
                        <input
                            ref={inputTask}
                            type="text"
                            id="searchInput"
                            className={style.searchInput}
                            placeholder="Type the task"
                            onChange={searchList}
                            onBlur={() => {
                                setOpen(() => !open);
                            }}
                            onClick={() => {
                                setOpen(() => true);
                            }}
                        />

                        {open && (
                            <div id="inputList" className={style.inputList}>
                                {tasksList.map((task) => (
                                    <div
                                        onMouseDown={() => {
                                            setPrice(() => task.money);
                                            inputTask.current.value = task.name;
                                        }}
                                        key={task.id}
                                    >
                                        {task.name}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className={style.formInfo}>
                        <div className={style.formPrice}>
                            <h3>Recommended price</h3>

                            <span
                                className={`${style.formInput} ${style.formInputSecond}`}
                            >
                                {price}
                            </span>
                            <span>$</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainStart;
