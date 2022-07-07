import React, { useState, useEffect, useRef } from "react";
import { usePage, useForm } from "@inertiajs/inertia-react";
import ValidationErrors from "@/components/shared/validationErrors/validationErrors";
import style from "./makeOrder.module.css";

const MakeOrder = (props) => {
    const { data, setData, errors, post, processing } = useForm({
        title: "",
        task_id: "",
        description: "",
        cost: "",
        time: "",
        file: "",
    });

    const inputTask = useRef();
    const taskIdRef = useRef();
    const [selectedFile, setSelectedFile] = useState("");
    const { tasks } = usePage().props;
    const [moneyTotalSearch, setMoneyTotalSearch] = useState(0);
    const [hoursTotalSearch, setHoursTotalSearch] = useState(0);
    let [tasksList, setTasksList] = useState(tasks);
    let [open, setOpen] = useState(false);

    function searchList() {
        setTasksList(() => {
            tasksList = [];

            tasksList = tasks.filter((el) =>
                el.name
                    .toLowerCase()
                    .includes(inputTask.current.value.toLowerCase())
            );
            return tasksList;
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        post(
            route("order.store", data, {
                preserveScroll: true,
                forceFormData: true,
                _method: "put",
            })
        );
    }

    useEffect(() => {
        setTasksList(() => tasksList);
    }, [tasksList]);

    return (
        <div className={style.formWrapper}>
            <form onSubmit={handleSubmit}>
                <label className={style.formLabel}>Make Order</label>

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
                            {tasksList.map((task) => (
                                <div
                                    onMouseDown={() => {
                                        inputTask.current.value = task.name;
                                        setData("task_id", task.id);
                                    }}
                                    key={task.id}
                                >
                                    {task.name}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {moneyTotalSearch !== 0 && (
                    <div className="flex align-content-between">
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-300">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-file-dollar"
                                width="24"
                                height="16"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                {" "}
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                />{" "}
                                <path d="M14 3v4a1 1 0 0 0 1 1h4" />{" "}
                                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />{" "}
                                <path d="M14 11h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />{" "}
                                <path d="M12 17v1m0 -8v1" />{" "}
                            </svg>
                            Average cost of task: {moneyTotalSearch} $
                        </span>
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-300">
                            <svg
                                className="mr-1 w-3 h-3"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            Average time task takes: {hoursTotalSearch} day(s)
                        </span>
                    </div>
                )}

                <input
                    type="text"
                    className={style.formInput}
                    label="Title"
                    name="title"
                    required
                    value={data.title}
                    onChange={(e) => setData("title", e.target.value)}
                    placeholder="Enter the title *"
                />

                <textarea
                    type="text"
                    className={style.formInput}
                    label="description"
                    name="description"
                    required
                    errors={errors.description}
                    value={data.description}
                    onChange={(e) => setData("description", e.target.value)}
                    placeholder="Enter description *"
                />

                <div className={style.formInfo}>
                    <div className={style.formPrice}>
                        <label className={style.formLabel}>Price</label>

                        <input
                            type="text"
                            className={`${style.formInput} ${style.formInputSecond}`}
                            label="cost"
                            inputMode="numeric"
                            required
                            name="cost"
                            onChange={(e) => setData("cost", e.target.value)}
                        />

                        <span>$</span>
                    </div>

                    <div className={style.formPeriod}>
                        <label className={style.formLabel}>Term</label>

                        <input
                            type="text"
                            required
                            className={`${style.formInput} ${style.formInputSecond}`}
                            inputMode="numeric"
                            label="time"
                            name="time"
                            onChange={(e) => setData("time", e.target.value)}
                        />

                        <span>days</span>
                    </div>
                </div>

                <div className={style.formFile}>
                    <div className={style.fileInfo}>
                        <div className={style.fileUpload}>
                            <label>
                                <input
                                    type="file"
                                    name="file"
                                    onChange={(e) => {
                                        if (e.target.files[0]) {
                                            setSelectedFile(
                                                e.target.files[0].name
                                            );
                                        } else {
                                            setSelectedFile("");
                                        }
                                        setData("file", e.target.files[0]);
                                    }}
                                    id="uploaded-file"
                                />

                                <span>+ Add file with job description</span>
                            </label>
                        </div>

                        <div className={style.fileName}>{selectedFile}</div>
                    </div>
                </div>

                <div className={style.btnContainer}>
                    <button
                        type="submit"
                        disabled={processing}
                        className={stgit statusyle.btnSubmit}
                    >
                        Publish and find a specialist
                    </button>
                </div>

                {errors.file && <div>{errors.file}</div>}

                <ValidationErrors errors={errors} />
            </form>
        </div>
    );
};

export default MakeOrder;
