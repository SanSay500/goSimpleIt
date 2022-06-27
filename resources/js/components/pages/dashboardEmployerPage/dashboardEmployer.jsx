import React from "react";
import { Link, usePage } from "@inertiajs/inertia-react";
import FlashMessages from "@/components/shared/flashMessages/flashMessages";
import Footer from "@/components/shared/footer/footer";
import HeaderLogout from "@/components/shared/headers/headerLogout/headerLogout";
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
            <HeaderLogout title="Dashboard" />

            <Container>
                <br />
                <FlashMessages />

                <OrdersList />

                <br />
                <div align="center">
                    <Link
                        className="bg-clip-content p-1 bg-green-400 p-2 rounded-full border-4 border-violet-100 border-dashed"
                        href={route("main.page")}
                    >
                        Main
                    </Link>
                </div>
            </Container>

            <Footer />
        </>
    );
}
