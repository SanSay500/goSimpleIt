import React from "react";
import { Link, usePage } from "@inertiajs/inertia-react";
import FlashMessages from "@/components/shared/flashMessages/flashMessages";
import Footer from "@/components/shared/footer/footer";
import Header from "@/components/shared/header/header";
import OrdersList from "./ordersList/ordersList";
import Container from "@mui/material/Container";

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

            <div className="container">
                <FlashMessages />
                <OrdersList />
            </div>
            <Footer />
        </>
    );
}
