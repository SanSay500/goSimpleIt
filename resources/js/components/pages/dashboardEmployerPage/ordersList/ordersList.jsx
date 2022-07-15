import React from "react";
import { usePage } from "@inertiajs/inertia-react";
import Order from "./order/order";
import style from "./ordersList.module.css";

export default function OrdersList(props) {
    const { orders, proposalsForOrder } = usePage().props;

    return (
        <div className={`${style.cardsContainer}`}>
            {orders.map((order) => {
                return <Order {...order} key={order.id} />;
            })}
        </div>
    );
}
