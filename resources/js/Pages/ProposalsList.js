import React from 'react';
import {Head, Link, usePage} from '@inertiajs/inertia-react';
import Container from "@mui/material/Container";

export default function ProposalsList(props) {
    const {proposals} = usePage().props;

    return (
        <Container>
            {proposals &&
                proposals.map(
                    (proposal) => {
                        return <p key={proposal.id}> {proposal.id} >> {proposal.status}</p>
                    }
                )
            }
        </Container>
    )
}
