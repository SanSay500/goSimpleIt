import React from "react";
import { Link, usePage } from "@inertiajs/inertia-react";
import FlashMessages from "@/components/shared/flashMessages/flashMessages";
import Footer from "@/components/shared/footer/footer";
import Header from "@/components/shared/header/header";
import OrdersList from "./ordersList/ordersList";
import SectionContainer from "@/components/shared/sectionContainer/sectionContainer"

export default function DashboardEmployer(props) {
    const {
        orders,
        proposals,
        proposalsForOrder,
        tasksWithOrders,
        ordersActive,
    } = usePage().props;

    return (
        <>
            <Header title="Dashboard" />
            
            <SectionContainer>
                <FlashMessages />
                <OrdersList />
            </SectionContainer>
            <Footer />
        </>
    );
}
