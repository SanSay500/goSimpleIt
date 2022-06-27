import React from "react";
import { usePage } from "@inertiajs/inertia-react";
import FlashMessages from "@/components/shared/flashMessages/flashMessages";
import Footer from "@/components/shared/footer/footer";
import HeaderLogout from "@/components/shared/headers/headerLogout/headerLogout";
import Container from "@mui/material/Container";

export default function UserProfile(title) {
    const props = usePage().props;

    return (
        <>
            <HeaderLogout title="Profile" />
            <br />

            <Container maxWidth="sm">
                <FlashMessages />
                {props.auth.user.name}
                <br />
                {props.auth.user.role}
                <br />
                {props.auth.user.description}
                <br />
                Under construction...
            </Container>
            <Footer />
        </>
    );
}
