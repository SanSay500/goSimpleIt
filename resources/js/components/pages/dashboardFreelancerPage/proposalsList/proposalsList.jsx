import React from "react";
import { usePage } from "@inertiajs/inertia-react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
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
                                  <div>
                                      <b>Proposal ID:</b> {proposal.id}
                                      <b>Proposal status:</b> {proposal.status}
                                      <b>Order ID:</b> {proposal.order_id}
                                  </div>
                              </div>
                          );
                      })
                    : "You sent no proposals yet"}
        </div>
            
    );
}
