import React from "react";
import {Link, usePage} from '@inertiajs/inertia-react';
import Order from "@/Pages/Order";

export default function OrdersList(props) {
   const {orders, proposalsForOrder} = usePage().props;
    return (
        <>

            {orders.map( (order) => {
                return <Order {...order}/>
            })
            }
            </>
    )
}
