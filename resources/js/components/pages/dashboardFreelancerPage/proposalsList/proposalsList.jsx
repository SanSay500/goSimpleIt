import React from "react";
import { usePage } from "@inertiajs/inertia-react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";

export default function ProposalsList(props) {
    const { proposals } = usePage().props;

    return (
        <Container>
            <Card variant="outlined">
                <p className="font-bold text-4xl text-center text-green-500">
                    Sent Proposals
                </p>

                {proposals
                    ? proposals.map((proposal) => {
                          return (
                              <div key={proposal.id} className="border-b-2">
                                  <div>
                                      <b>Proposal ID:</b> {proposal.id}
                                      <b>Proposal status:</b> {proposal.status}
                                      <b>Order ID:</b> {proposal.order_id}
                                  </div>
                              </div>
                          );
                      })
                    : "You sent no proposals yet"}
            </Card>
        </Container>
    );
}
