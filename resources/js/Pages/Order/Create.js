import React, { useState, useEffect, useRef } from "react";
import { InertiaLink, usePage, useForm } from "@inertiajs/inertia-react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";


const Create = (props) => {
    const { data, setData, errors, post } = useForm({
        title: "",
        description: "",
        money: "",
        hours: "",
        file: "",
        email: props.user ? props.user.email : '',
        phone: "",
        user_id: props.user ? props.user.id : '1',
    });

    const moneyRef = useRef();
    const hoursRef = useRef();
    const [selectedFile, setSelectedFile] = useState("");
    const { tasks } = usePage().props;
    const [moneyTotalSearch, setMoneyTotalSearch] = useState(0);
    const [hoursTotalSearch, setHoursTotalSearch] = useState(0);

    function handleSubmit(e) {
        e.preventDefault();

          data.money = moneyRef.current;
          data.hours = hoursRef.current;
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
            setMoneyTotalSearch(tasks.find((e) => e.name == value).money);
            setHoursTotalSearch(tasks.find((e) => e.name == value).time);
        }
    };

    useEffect(() => {
        moneyRef.current = moneyTotalSearch;
        hoursRef.current = hoursTotalSearch;

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
                                    Search by tasks{" "}
                                </label>

                                <Autocomplete
                                    freeSolo
                                    id="search-job auto"
                                    disableClearable
                                    options={tasks.map((option) => option.name)}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            onSelect={changeSearch}
                                            label="Start typing job..."
                                            InputProps={{
                                                ...params.InputProps,
                                                type: "search",
                                            }}
                                        />
                                    )}
                                />
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
                                        value={moneyTotalSearch}
                                        readOnly
                                    />
                                    $
                                </div>
                                <div className="form-period">
                                    <label className="form-label">Period</label>
                                    <input
                                        type="text"
                                        className="form-input form-input--second"
                                        label="time"
                                        name="time"
                                        value={hoursTotalSearch}
                                        readOnly
                                    />{" "}
                                    hours
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

                            {!props.user ? (
                                <div className="form-item form-title">
                                    <label className="form-label">E-mail</label>
                                    <input
                                        type="text"
                                        className="form-input"
                                        label="Email"
                                        name="email"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        placeholder="Enter"
                                    />

                                    <label className="form-label">Phone</label>
                                    <input
                                        type="text"
                                        className="form-input"
                                        label="Phone"
                                        name="phone"
                                        value={data.phone}
                                        onChange={(e) =>
                                            setData("phone", e.target.value)
                                        }
                                        placeholder="Enter"
                                    />
                                </div>)
                                : ''}
                        </div>
                        {errors.file && <div>{errors.file}</div>}
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
