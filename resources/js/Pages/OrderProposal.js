import {Link, usePage} from "@inertiajs/inertia-react";
import React from "react";
import {Chip} from "@mui/material";
import { v4 as uuidv4 } from 'uuid';

export default function OrderProposal(order) {
    const {proposalsForOrder} = usePage().props;

    return (
        <>
            {proposalsForOrder.filter(proposal => proposal.order_id === order.id).map(filteredProposal => {
                return (
                    <div key={uuidv4()}>
                        <div key={filteredProposal.id}> Proposal from freelancers on this job:{' '}

                            {filteredProposal.status === 'Confirmed' && <Chip label="Working on this order now"/>}

                            <Link href={route('confirm.proposal', [order.id, filteredProposal.id])}
                            className="p-1 bg-sky-500 text-bg font-medium text-gray-900 bg-blue rounded-full"
                            >Examine</Link>
                        </div>
                    </div>
                )
            })
            }
        </>
    )
}
