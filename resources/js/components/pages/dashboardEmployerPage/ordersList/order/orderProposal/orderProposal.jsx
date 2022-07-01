import React from "react";
import { Chip } from "@mui/material";
import { Link, usePage } from "@inertiajs/inertia-react";
import style from "./orderProposal.module.css";
export default function OrderProposal(order) {
    const { proposalsForOrder } = usePage().props;

    return (
        <>
            {proposalsForOrder
                .filter((proposal) => proposal.order_id === order.id)
                .map((filteredProposal) => {
                    return (
                        <div
                            key={filteredProposal.id}
                            className={`${style.linkConatiner}`}
                        >
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
                                View proposal from freelancers:
                            </Link>
                        </div>
                    );
                })}
        </>
    );
}
