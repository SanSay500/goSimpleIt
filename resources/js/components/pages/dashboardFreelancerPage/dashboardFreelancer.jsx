import React, { useState } from "react";
import { usePage } from "@inertiajs/inertia-react";
import ProposalsList from "./proposalsList/proposalsList";
import ButtonViewMore from "@/components/shared/buttonViewMore/buttonViewMore";
import BasicCard from "@/components/shared/activeTasks/basicCard/basicCard";
import Container from "@/components/shared/container/container";
import style from "./dashboardFreelancer.module.css";

export default function DashboardFreelancer(props) {
    let count = 4;
    const { proposals, tasksWithOrders, ordersActive } = usePage().props;
    const [showOrdersQty, setShowOrdersQty] = useState(count);
    const [ordersToShow, setOrdersToShow] = useState(ordersActive);

    function loadOrders(e) {
        e.preventDefault();
        setShowOrdersQty(showOrdersQty + count);
    }
    return (
        <>
            <Container styleContainer={style.container}>
                <div className={`${style.freelancerOrder}`}>
                    <div className={`${style.freelancerOrderWrapper}`}>
                        <h2 className={`title`}>Active Tasks</h2>

                        <div className={`${style.activeTasks}`}>
                            {ordersToShow
                                .slice(0, showOrdersQty)
                                .map((order) => {
                                    return (
                                        <BasicCard
                                            key={order.id}
                                            props={order}
                                        />
                                    );
                                })}
                        </div>

                        {ordersToShow.length > showOrdersQty && (
                            <ButtonViewMore
                                click={(e) => {
                                    loadOrders(e);
                                }}
                            />
                        )}
                    </div>

                    <ProposalsList />
                </div>
            </Container>
        </>
    );
}
