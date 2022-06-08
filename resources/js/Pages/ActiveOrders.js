import React, {useState, useEffect, useRef} from "react";
import {InertiaLink, usePage, useForm} from "@inertiajs/inertia-react";
import {Grid} from "@mui/material";
import BasicCard from "@/Pages/Order/BasicCard";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Container from "@mui/material/Container";

const ActiveOrders = (props) => {
    const {orders, tasksWithOrders} = usePage().props;
    const [showOrders, setShowOrders] = useState(5);
    const [ordersToShow, setOrdersToShow] = useState(orders);

    function loadOrders(e)
    {
        e.preventDefault();
        setShowOrders(showOrders+5);
    }

    var showOrdersNum=orders.slice(0,showOrders);

    const changeSearch = ({ target: { value } }) => {
        if (value) {
            let job_found = tasksWithOrders.find(e => (e.name === value) ).id;
            if (job_found) {
                filterJobs(job_found);
            }
        }
    }

    function filterJobs(task_id)
    {
     let newOrdersToShow = orders.filter( el => (el.task_id === task_id) );
            setOrdersToShow(newOrdersToShow);
            setShowOrders(5);
    }

return (

    <div className="form-wrapper">
        <div className="p-6 bg-white border-b border-gray-200 width">
            <h3 className="portfolio-title title">Active Tasks</h3>
            <Autocomplete
                freeSolo
                id="search-job auto"
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
            <br/>
            <Container>
            {ordersToShow.slice(0,showOrders).map(
                (order) => {
                    return (
                        <BasicCard key={order.id} props={order}/>
                    )
                }
            )}
                {ordersToShow.length > 5 &&
                    <button className="review__button" onClick={loadOrders}>Show more</button>
                }
            </Container>
        </div>
    </div>
            );

};

export default ActiveOrders;
