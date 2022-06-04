import React, { useState, useEffect, useRef } from "react";
import { InertiaLink, usePage, useForm } from "@inertiajs/inertia-react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import ValidationErrors from "@/Components/ValidationErrors";


const Create = (props) => {
    const { data, setData, errors, post, processing, reset } = useForm({
        title: "",
        task_id: "",
        description: "",
        cost: "",
        time: "",
        file: "",
        email: props.user ? props.user.email : '',
        phone: "",
        user_id: props.user ? props.user.id : '1',
    });

//    const moneyRef = useRef();
//    const hoursRef = useRef();
    const taskIdRef = useRef();
    const [selectedFile, setSelectedFile] = useState("");
    const { tasks } = usePage().props;
    const [moneyTotalSearch, setMoneyTotalSearch] = useState(0);
    const [hoursTotalSearch, setHoursTotalSearch] = useState(0);
    const [taskId, setTaskId] = useState(0);

    function handleSubmit(e) {
        e.preventDefault();
          //data.money = moneyRef.current;
          //data.hours = hoursRef.current;
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
        //moneyRef.current = moneyTotalSearch;
       // hoursRef.current = hoursTotalSearch;
        taskIdRef.current = taskId;

    });

    return (

        <section className="form-block">
            <div className="container">
                <div className="form-wrapper">
                    <form name="createForm" onSubmit={handleSubmit}>
                        <div className="form-section">
                            <div className="form-item form-search">
                                <label className="form-label">
                                    {" "}
                                    Make Order{" "}
                                </label>

                                <Autocomplete
                                    freeSolo
                                    id="search-job auto"
                                    disableClearable
                                    options={tasks.map((option) => option.name)}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            name="task_type"
                                            onSelect={changeSearch}
                                            label="Start typing task..."
                                            InputProps={{
                                                ...params.InputProps,
                                                type: "search",
                                            }}
                                        />
                                    )}
                                />
                                approx cost $: {moneyTotalSearch} approx term hours: {hoursTotalSearch}
                            </div>
                            <div className="form-item form-title">
                                <label className="form-label">Title</label>
                                <input
                                    type="text"
                                    className="form-input"
                                    label="Title"
                                    name="title"
                                    value={data.title}
                                    onChange={(e) =>
                                        setData("title", e.target.value)
                                    }
                                    placeholder="Enter"
                                />
                            </div>

                            <div className="form-item form-description">
                                <label className="form-label">
                                    Description
                                </label>
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
                                    placeholder="Enter"
                                />
                                <span className="text-red-600">
                                    {errors.description}
                                </span>
                            </div>
                            <div className="form-info">
                                <div className="form-price">
                                    <label className="form-label">Price</label>
                                    <input
                                        type="text"
                                        className="form-input form-input--second"
                                        label="cost"
                                        name="cost"
                                        // value={moneyTotalSearch}
                                        // readOnly
                                        onChange={(e) =>
                                            setData("cost", e.target.value)
                                        }
                                    />
                                    $
                                </div>
                                <div className="form-period">
                                    <label className="form-label">Term</label>
                                    <input
                                        type="text"
                                        className="form-input form-input--second"
                                        label="time"
                                        name="time"
                                        // value={hoursTotalSearch}
                                        // readOnly
                                        onChange={(e) =>
                                            setData("time", e.target.value)
                                        }
                                    />{" "}
                                    day(s)
                                </div>
                            </div>
                            <div className="form-file">
                                <label className="form-label">
                                    Add file with job description
                                </label>
                                <div className="file-info">
                                    <div className="file-upload">
                                        <label>
                                            <input
                                                type="file"
                                                name="file"
                                                onChange={(e) => {
                                                    if(e.target.files[0]){
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
                                            <span>Choose a file</span>
                                        </label>
                                    </div>

                                    <div className="file-name">
                                        {selectedFile}
                                    </div>

                                </div>

                            </div>

                            {/*{!props.user ? (*/}
                            {/*    <div className="form-item form-title">*/}
                            {/*        <label className="form-label">E-mail</label>*/}
                            {/*        <input*/}
                            {/*            type="text"*/}
                            {/*            className="form-input"*/}
                            {/*            label="Email"*/}
                            {/*            name="email"*/}
                            {/*            value={data.email}*/}
                            {/*            onChange={(e) =>*/}
                            {/*                setData("email", e.target.value)*/}
                            {/*            }*/}
                            {/*            placeholder="Enter"*/}
                            {/*        />*/}

                            {/*        <label className="form-label">Phone</label>*/}
                            {/*        <input*/}
                            {/*            type="text"*/}
                            {/*            className="form-input"*/}
                            {/*            label="Phone"*/}
                            {/*            name="phone"*/}
                            {/*            value={data.phone}*/}
                            {/*            onChange={(e) =>*/}
                            {/*                setData("phone", e.target.value)*/}
                            {/*            }*/}
                            {/*            placeholder="Enter"*/}
                            {/*        />*/}
                            {/*    </div>)*/}
                            {/*    : ''}*/}
                        </div>
                        {errors.file && <div>{errors.file}</div>}
                        <ValidationErrors errors={errors} />

                        <div className="btn-container">

                            <button type="submit" className="btn-submit">
                                Publish and find a specialist
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Create;
