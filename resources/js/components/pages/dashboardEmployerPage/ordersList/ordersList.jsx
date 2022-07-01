import React from "react";
import { usePage } from "@inertiajs/inertia-react";
import Order from "./order/order";

export default function OrdersList(props) {
    const { orders, proposalsForOrder } = usePage().props;

    return (
        <>
            {orders.map((order) => {
                return <Order {...order}  key={order.id} />;
            })}
        </>
    );
}
