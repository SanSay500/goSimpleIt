import React from 'react';
import {Head, Link, usePage} from '@inertiajs/inertia-react';
import FlashMessages from "@/Pages/Shared/FlashMessages";
import Footer from "@/Components/footer.js";
import HeaderLogoutContainer from "@/Components/HeaderLogout";
import Container from "@mui/material/Container";

export default function UserProfile(props) {

    return (
        <Container>
            <HeaderLogoutContainer/>
            <br/>
            <FlashMessages/>


            <Footer/>
        </Container>
    );
}
