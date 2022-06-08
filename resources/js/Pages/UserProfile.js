import React from 'react';
import {Head, Link, usePage} from '@inertiajs/inertia-react';
import FlashMessages from "@/Pages/Shared/FlashMessages";
import Footer from "@/Components/footer.js";
import HeaderDashboardContainer from "@/Components/HeaderLogout";
import Container from "@mui/material/Container";

export default function UserProfile(title) {
    const props = usePage().props;

    return (
        <>
        <HeaderDashboardContainer title="Profile"/>
    <br/>
    <Container maxWidth="sm">
        <FlashMessages/>
        {props.auth.user.name}
        {props.auth.user.role}
        {props.auth.user.description}

    </Container>
    <Footer/>
        </>
)
}
