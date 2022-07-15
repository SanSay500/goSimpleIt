import React from "react";
import { usePage } from "@inertiajs/inertia-react";
import OrdersList from "./ordersList/ordersList";
import Container from "@/components/shared/container/container";
import FlashMessages from "@/components/shared/flashMessages/flashMessages";

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
            <Container>
                <FlashMessages/>
                <OrdersList />
            </Container>
        </>
    );
}
