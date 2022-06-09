import React from 'react';
import {Head, Link, usePage} from '@inertiajs/inertia-react';
import FlashMessages from "@/Pages/Shared/FlashMessages";
import Footer from "@/Components/footer.js";
import ProposalsList from "@/Pages/ProposalsList";
import HeaderDashboardContainer from "@/Components/HeaderLogout";
import OrdersList from "@/Pages/OrdersList";
import Container from "@mui/material/Container";
import ActiveOrders from "@/Pages/ActiveOrders";

export default function DashboardFreelancer(props) {
    const {proposals, tasksWithOrders, ordersActive} = usePage().props;

    return (
        <>
            <HeaderDashboardContainer title="Dashboard"/>
            <Container>
                <br/>
                <FlashMessages/>

                <ProposalsList/>

                <ActiveOrders/>

                <div align="center">
                    <Link
                        className="bg-clip-content p-1 bg-green-400 p-2 rounded-full border-4 border-violet-100 border-dashed"
                        href={route('main.page')}>Main</Link>
                </div>
            </Container>
            <Footer/>
        </>
    )

}
