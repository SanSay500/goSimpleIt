import React, {useState, useEffect, useRef} from "react";
import {InertiaLink, usePage, useForm} from "@inertiajs/inertia-react";

const ActiveOrders = (props) => {
    const {data, setData, errors, post} = useForm({
        title: "",
        description: "",
        money: "",
        hours: "",
        file: "",
    });

    const {orders} = usePage().props;
return (

    <div className="form-wrapper">
        <div className="p-6 bg-white border-b border-gray-200">
            Order number >>  Odred Title >>  Order Status
            {orders.map(
                (order) => {
                    return (
                        <p>{order.id} >> {order.title} >> {order.status}</p>
                    )
                }
            )}
        </div>
    </div>
            );
};

export default ActiveOrders;
