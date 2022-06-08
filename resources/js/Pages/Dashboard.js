import React from 'react';
import {Head, Link, usePage} from '@inertiajs/inertia-react';
import FlashMessages from "@/Pages/Shared/FlashMessages";
import Footer from "@/Components/footer.js";
import ProposalsList from "@/Pages/ProposalsList";
import HeaderDashboardContainer from "@/Components/HeaderLogout";
import OrdersList from "@/Pages/OrdersList";
import Container from "@mui/material/Container";

export default function Dashboard(props) {
    const {orders, proposals, proposalsForOrder} = usePage().props;

    return (
        <Container>
            <HeaderDashboardContainer title="Dashboard"/>
            <br/>
            <FlashMessages/>
            {props.auth && props.auth.user.role == 'Freelancer' &&
                <ProposalsList/>}
            <OrdersList/>
            <br/>
            <div align="center">
            <Link className="bg-clip-content p-1 bg-green-400 p-2 rounded-full border-4 border-violet-100 border-dashed" href={route('main.page')}>Main</Link>
            </div>
            <Footer/>
        </Container>
    );
}
