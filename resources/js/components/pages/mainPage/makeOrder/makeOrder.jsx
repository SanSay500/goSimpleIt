import React, { useState, useEffect, useRef } from "react";
import { usePage, useForm } from "@inertiajs/inertia-react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import ValidationErrors from "@/components/shared/validationErrors/validationErrors";
import style from "./makeOrder.module.css";

const MakeOrder = (props) => {
    const { data, setData, errors, post, processing, reset } = useForm({
        title: "",
        task_id: "",
        description: "",
        cost: "",
        time: "",
        file: "",
    });

    const taskIdRef = useRef();
    const [selectedFile, setSelectedFile] = useState("");
    const { tasks } = usePage().props;
    const [moneyTotalSearch, setMoneyTotalSearch] = useState(0);
    const [hoursTotalSearch, setHoursTotalSearch] = useState(0);
    const [taskId, setTaskId] = useState(0);

    function setValue (props) {
        const inputValue = document.getElementById('searchInput');
        const result = inputValue.childNodes[props];
        if (result) {
            inputValue.value = result;
        }
    }

    const searchList = (props) => {
        const options = tasks.map((props) => props.name);
        const inputList = document.getElementById('inputList');
        const inputValue = document.getElementById('searchInput');
        let results = [];

        function findResults() {
            options.find(element => {
                if (element.includes(inputValue.value)) {
                    results.push(element);
                }
            })
        }

        findResults();

        for (let i = 0; i < results.length; i++) {
            const div = document.createElement('div');
            div.innerHTML = results[i];
            div.setAttribute('id', i);
            div.setAttribute('onClick', setValue(div.id))
            inputList.appendChild(div);
        }
    }

    const clearList = () => {
        const inputList = document.getElementById('inputList');
        while (inputList.firstChild) {
            inputList.removeChild(inputList.lastChild);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        data.task_id = taskIdRef.current;
        post(
            route("order.store", data, {
                forceFormData: true,
                _method: "put",
                preserveScroll: true,
                preserveState: true,
            })
        );
    }

    const changeSearch = ({ target: { value } }) => {
        setMoneyTotalSearch(0);
        setHoursTotalSearch(0);

        let job_found = tasks.find((e) => e.name == value);
        if (job_found) {
            setTaskId(tasks.find((e) => e.name == value).id);
            setMoneyTotalSearch(tasks.find((e) => e.name == value).money);
            setHoursTotalSearch(tasks.find((e) => e.name == value).time);
        }
    };

    useEffect(() => {
        taskIdRef.current = taskId;
    });

    return (
        <div className={style.formWrapper}>
            <form name="createForm" onSubmit={handleSubmit}>
                <label className={style.formLabel}>Make Order</label>
                {/* <Autocomplete
                    freeSolo
                    id="search-job auto"
                    className="search_input"
                    disableClearable
                    options={tasks.map((option) => option.name)}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            name="task_type"
                            onSelect={changeSearch}
                            label="Type the task"
                            InputProps={{
                                ...params.InputProps,
                                type: "search",
                            }}
                        />
                    )}
                /> */}
                <div className={style.searchJob}>
                    <input 
                        type="text" 
                        id="searchInput"
                        className={style.searchInput} 
                        placeholder="Type the task" 
                        onChange={searchList}
                        onBlur={clearList} 
                    />
                    <div id="inputList" className={style.inputList}></div>
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
                                stroke-width="2"
                                stroke="currentColor"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
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
                                    fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                            Average time task takes: {hoursTotalSearch} day(s)
                        </span>
                    </div>
                )}
                {/*<label className="form-label">Title</label>*/}
                <input
                    type="text"
                    className={style.formInput}
                    label="Title"
                    name="title"
                    value={data.title}
                    onChange={(e) => setData("title", e.target.value)}
                    placeholder="Enter the title"
                />

                <div>
                    {/*<label className="form-label">
                        Description
                    </label>*/}
                    <textarea
                        type="text"
                        className={style.formInput}
                        label="description"
                        name="description"
                        errors={errors.description}
                        value={data.description}
                        onChange={(e) => setData("description", e.target.value)}
                        placeholder="Enter description"
                    />
                    <span className="text-red-600">{errors.description}</span>
                </div>
                <div className={style.formInfo}>
                    <div className={style.formPrice}>
                        <label className={style.formLabel}>Price</label>
                        <input
                            type="text"
                            className={`${style.formInput} ${style.formInputSecond}`}
                            label="cost"
                            name="cost"
                            onChange={(e) => setData("cost", e.target.value)}
                        />
                        <span>$</span>
                    </div>
                    <div className={style.formPeriod}>
                        <label className={style.formLabel}>Term</label>
                        <input
                            type="text"
                            className={`${style.formInput} ${style.formInputSecond}`}
                            label="time"
                            name="time"
                            onChange={(e) => setData("time", e.target.value)}
                        />{" "}
                        <span>days</span>
                    </div>
                </div>
                <div className={style.formFile}>
                    {/*<label className="form-label">
                        Add file with job description
                        </label>*/}
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

                        {/*<div className="btn-container">

                            <button type="submit" className="btn-submit">
                                Publish and find a specialist
                            </button>
                        </div>*/}
                    </div>
                </div>

                <div className={style.btnContainer}>
                    <button type="submit" className={style.btnSubmit}>
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
