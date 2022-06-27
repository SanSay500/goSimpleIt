import React, { useState, useEffect, useRef } from "react";
import { InertiaLink, usePage, useForm } from "@inertiajs/inertia-react";
import { Grid } from "@mui/material";
import BasicCard from "./basicCard/basicCard";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Container from "@mui/material/Container";
import { order } from "tailwindcss/defaultTheme";

const ActiveOrders = (props) => {
    const { ordersActive, tasksWithOrders } = usePage().props;
    const [showOrdersQty, setShowOrdersQty] = useState(5);
    const [ordersToShow, setOrdersToShow] = useState(ordersActive);

    function loadOrders(e) {
        e.preventDefault();
        setShowOrdersQty(showOrdersQty + 5);
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
        <div className="form-wrapper">
            <p className="font-bold text-4xl text-center text-green-500">
                Active Tasks
            </p>
            <Container>
                <Autocomplete
                    freeSolo
                    className="search_input"
                    id="search-job555 auto"
                    disableClearable
                    options={tasksWithOrders.map((option) => option.name)}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            name="search_task"
                            onSelect={changeSearch}
                            label="Search by task..."
                            InputProps={{
                                ...params.InputProps,
                                type: "search",
                            }}
                        />
                    )}
                />
                <br />

                <div className="basic-card-wrapper">
                    {ordersToShow.slice(0, showOrdersQty).map((order) => {
                        return <BasicCard key={order.id} props={order} />;
                    })}
                </div>
                {ordersToShow.length > 5 && (
                    <button className="review__button" onClick={loadOrders}>
                        View more
                    </button>
                )}
            </Container>
        </div>
    );
};

export default ActiveOrders;
