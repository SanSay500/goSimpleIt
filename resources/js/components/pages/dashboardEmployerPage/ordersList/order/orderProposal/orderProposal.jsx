import React from "react";
import { Chip } from "@mui/material";
import { Link, usePage } from "@inertiajs/inertia-react";
import style from "./orderProposal.module.css";
export default function OrderProposal(order) {
    const { proposalsForOrder } = usePage().props;
    let count=0;
    return (
        <div className={`${style.linkConatiner}`}>
            <span className={`${style.linkView} ${style.textView}`}>View proposal from freelancers</span>

            {proposalsForOrder
                .filter((proposal) => proposal.order_id === order.id)
                .map((filteredProposal) => {
                    count++;
                    return (
                        <div key={filteredProposal.id}>
{/*                             {filteredProposal.status === "Confirmed" && (
                                <Chip label="Working on this order now" />
                            )} */}
                            <Link
                                href={route("confirm.proposal", [
                                    order.id,
                                    filteredProposal.id,
                                ])}
                                className={`${style.linkView}`}

                            >
                                {filteredProposal.name}
                            </Link>
                        </div>
                    );
                })}
        </div>
    );
}
