import React, {useState, useEffect, useRef} from "react";
import {InertiaLink, usePage, useForm} from "@inertiajs/inertia-react";
import {Grid} from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BasicCard from "@/Pages/Order/BasicCard";


const ActiveOrders = (props) => {
    const {orders} = usePage().props;
    const [showOrders, setShowOrders] = useState(5);
    function loadOrders(e) {
        e.preventDefault();
        setShowOrders(showOrders+5);
    }
    var showOrdersNum=orders.slice(0,showOrders);

return (

    <div className="form-wrapper">
        <div className="p-6 bg-white border-b border-gray-200">
            <Grid container spacing={2}>`
            {showOrdersNum.map(
                (order) => {
                    return (
                        <BasicCard key={order.id} props={order}/>
                    )
                }
            )}
            </Grid>
            <button onClick={loadOrders}>Show more</button>

        </div>
    </div>
            );

};

export default ActiveOrders;
