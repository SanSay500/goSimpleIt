import React from "react";
import { usePage } from "@inertiajs/inertia-react";

import style from './proposalsList.module.css'

export default function ProposalsList(props) {
    const { proposals } = usePage().props;

    return (
        <div className={`${style.proposalCard}`} >
                <p className={`${style.proposalText}`}>
                    Sent Proposals
                </p>

                {proposals
                    ? proposals.map((proposal) => {
                          return (
                              <div key={proposal.id} className={`${style.proposalItem}`}>
                                <div className={`${style.proposalItemText}`}>Proposal ID: {proposal.id}</div>
                                <div className={`${style.proposalItemText}`}>Proposal status: {proposal.status}</div>
                                <div className={`${style.proposalItemText}`}>Order ID: {proposal.order_id}</div>
                              </div>
                          );
                      })
                    : "You sent no proposals yet"}
        </div>
            
    );
}
