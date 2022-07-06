import React from "react";
import { usePage } from "@inertiajs/inertia-react";
import Container from "@/components/shared/container/container";

export default function UserProfile(title) {
    const props = usePage().props;

    return (
        <Container>
            {props.auth.user.name}
            <br />
            {props.auth.user.role}
            <br />
            {props.auth.user.description}
            <br />
            Under construction...
        </Container>
    );
}
