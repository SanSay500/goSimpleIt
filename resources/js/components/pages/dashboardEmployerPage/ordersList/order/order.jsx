import React from "react";
import { usePage } from "@inertiajs/inertia-react";
import OrderProposal from "./orderProposal/orderProposal";
import style from "./order.module.css";
import BasicCard from "@/components/shared/activeTasks/basicCard/basicCard";

export default function Order(order) {
    const { proposalsForOrder } = usePage().props;
    return (
        <div className={`${style.cardContainer}`}>
            <div className={`${style.cardHeader}`}>
                <div className={`${style.cardHeaderItem}`}>
                    Order # {order.id}
                </div>
                <div className={`${style.cardHeaderItem}`}>
                    Status:{" "}
                    <span className={`${style.cardSatus}`}>
                        {" "}
                        {order.status}
                    </span>
                </div>
            </div>
            <BasicCard key={order.id} props={order} classes={style.btn} />
            {order.status != "Done" && order.status != "Cancelled" && (
                <OrderProposal {...order} />
            )}
        </div>
    );
}
