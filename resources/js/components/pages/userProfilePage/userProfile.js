import React from "react";
import { Head, Link, usePage } from "@inertiajs/inertia-react";
import FlashMessages from "@/components/shared/FlashMessages";
import Footer from "@/components/footer.js";
import HeaderDashboardContainer from "@/components/HeaderLogout";
import Container from "@mui/material/Container";

export default function UserProfile(title) {
    const props = usePage().props;

    return (
        <>
            <HeaderDashboardContainer title="Profile" />
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
