import React from "react";
import { Link, usePage } from "@inertiajs/inertia-react";
import style from "./orderProposal.module.css";

export default function OrderProposal(order) {
    const { proposalsForOrder } = usePage().props;

    let proposals = proposalsForOrder.filter(
        (proposal) => proposal.order_id === order.id
    );

    return (
        <div className={`${style.linkConatiner}`}>
            {proposals.length === 0 ? (
                <></>
            ) : (
                <>
                    <span className={`${style.linkView} ${style.textView}`}>
                        Proposal:
                    </span>
                    {proposals.map((filteredProposal) => {
                        return (
                            <div key={filteredProposal.id}>
                                <Link
                                    href={route("confirm.proposal", [
                                        order.id,
                                        filteredProposal.id,
                                    ])}
                                    className={`${style.linkView}`}
                                >
                                    {filteredProposal.name};
                                </Link>
                            </div>
                        );
                    })}
                </>
            )}
        </div>
    );
}
