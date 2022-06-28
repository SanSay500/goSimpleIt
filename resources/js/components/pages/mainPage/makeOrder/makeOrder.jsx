import React, {useState, useEffect, useRef} from "react";
import {InertiaLink, usePage, useForm} from "@inertiajs/inertia-react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import ValidationErrors from "@/components/shared/validationErrors/validationErrors";
import Typography from "@mui/material/Typography";
import '@/../css/form.css'
import style from './makeOrder.module.css'

const MakeOrder = (props) => {
    const {data, setData, errors, post, processing, reset} = useForm({
        title: "",
        task_id: "",
        description: "",
        cost: "",
        time: "",
        file: "",
    });

    const taskIdRef = useRef();
    const [selectedFile, setSelectedFile] = useState("");
    const {tasks} = usePage().props;
    const [moneyTotalSearch, setMoneyTotalSearch] = useState(0);
    const [hoursTotalSearch, setHoursTotalSearch] = useState(0);
    const [taskId, setTaskId] = useState(0);

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

    const changeSearch = ({target: {value}}) => {
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

        <section className={style.formBlock}>
            <div className="container">
                <div className="form-wrapper">
                    <form name="createForm" onSubmit={handleSubmit}>
                        <div className={style.formSection}>
                            <div className="form-item form-search">
                                <label className="form-label">
                                    {" "}
                                    Make Order{" "}
                                </label>
                                <Autocomplete
                                    freeSolo
                                    id="search-job auto"
                                    className={style.searchInput}
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
                                />
                                {moneyTotalSearch !== 0 &&
                                    <div className="flex align-content-between">
                                        <span
                                            className="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-file-dollar" width="24"
                                                 height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                                 stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path
                                                d="M14 3v4a1 1 0 0 0 1 1h4"/> <path
                                                d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"/> <path
                                                d="M14 11h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5"/> <path d="M12 17v1m0 -8v1"/> </svg>
                                            Average cost of task: {moneyTotalSearch} $
                                        </span>
                                        <span
                                            className="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-300">
                                            <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path
                                                fill-rule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                                clip-rule="evenodd"></path></svg>
                                            Average time task takes: {hoursTotalSearch} day(s)
                                        </span>
                                    </div>
                                }
                            </div>
                            <div className="form-item form-title">
                                {/*<label className="form-label">Title</label>*/}
                                <input
                                    type="text"
                                    className="form-input"
                                    label="Title"
                                    name="title"
                                    value={data.title}
                                    onChange={(e) =>
                                        setData("title", e.target.value)
                                    }
                                    placeholder="Enter the title"
                                />
                            </div>

                            <div className="form-item form-description">
                                {/*<label className="form-label">
                                    Description
                                </label>*/}
                                <textarea
                                    type="text"
                                    className="form-input"
                                    label="description"
                                    name="description"
                                    errors={errors.description}
                                    value={data.description}
                                    onChange={(e) =>
                                        setData("description", e.target.value)
                                    }
                                    placeholder="Enter description"
                                />
                                <span className="text-red-600">
                                    {errors.description}
                                </span>
                            </div>
                            <div className={style.formInfo}>
                                <div className={style.formPrice}>
                                    <label className="form-label">Price</label>
                                    <input
                                        type="text"
                                        className="form-input form-input--second"
                                        label="cost"
                                        name="cost"
                                        onChange={(e) =>
                                            setData("cost", e.target.value)
                                        }
                                    />
                                    <span>$</span>
                                </div>
                                <div className={style.formPeriod}>
                                    <label className="form-label">Term</label>
                                    <input
                                        type="text"
                                        className="form-input form-input--second"
                                        label="time"
                                        name="time"
                                        onChange={(e) =>
                                            setData("time", e.target.value)
                                        }
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
                                                        setSelectedFile(
                                                            ''
                                                        );
                                                    }
                                                    setData(
                                                        "file",
                                                        e.target.files[0]
                                                    );
                                                }}
                                                id="uploaded-file"
                                            />
                                            <span>+ Add file with job description</span>
                                        </label>
                                    </div>

                                    <div className={style.fileName}>
                                        {selectedFile}
                                    </div>

                                    {/*<div className="btn-container">

                                        <button type="submit" className="btn-submit">
                                            Publish and find a specialist
                                        </button>
                                    </div>*/}

                                </div>

                            </div>



                            <button type="submit" className={style.btnSubmit}>
                                Publish and find a specialist
                            </button>


                        </div>
                        {errors.file && <div>{errors.file}</div>}
                        <ValidationErrors errors={errors}/>


                    </form>
                </div>
            </div>
        </section>
    );
};

export default MakeOrder;
