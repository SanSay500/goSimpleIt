import React from "react";
import { usePage } from "@inertiajs/inertia-react";
import OrderProposal from "./orderProposal/orderProposal";
import style from "./order.module.css";
import BasicCard from "@/components/shared/activeTasks/basicCard/basicCard";

export default function Order(props) {
    const { proposalsForOrder } = usePage().props;

    return (
        <div className={`${style.cardContainer}`}>
            <div className={`${style.cardHeader}`}>
                <div className={`${style.cardHeaderItem}`}>
                    Order # {props.id}
                </div>
                <div className={`${style.cardHeaderItem}`}>
                    Status:{" "}
                    <span className={`${style.cardStatus}`}>
                        {" "}
                        {props.status}
                    </span>
                </div>
            </div>
            <BasicCard
                key={props.id}
                order={props}
                classes={style.btn}
                symbolCurrency={props.symbolCurrency}
            />
            {props.status != "Done" && props.status != "Cancelled" && (
                <OrderProposal {...props} />
            )}
        </div>
    );
}
