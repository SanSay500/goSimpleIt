import React, { useState } from "react";
import { Link, usePage } from "@inertiajs/inertia-react";
import FlashMessages from "@/components/shared/flashMessages/flashMessages";
import Footer from "@/components/shared/footer/footer";
import ProposalsList from "./proposalsList/proposalsList";
import HeaderLogout from "@/components/shared/headers/headerLogout/headerLogout";
import ButtonViewMore from "@/components/shared/buttonViewMore/buttonViewMore";
import BasicCard from "@/components/shared/activeTasks/basicCard/basicCard";
import SectionContainer from "@/components/shared/sectionContainer/sectionContainer"
import style from './dashboardFreelancer.module.css'

export default function DashboardFreelancer(props) {
    let count=4;
    const { proposals, tasksWithOrders, ordersActive } = usePage().props;
    const [showOrdersQty, setShowOrdersQty] = useState(count);
    const [ordersToShow, setOrdersToShow] = useState(ordersActive);

    function loadOrders(e) {
        e.preventDefault();
        setShowOrdersQty(showOrdersQty + count);
    }
    return (
        <>
            <HeaderLogout title="Dashboard" />
            
            <SectionContainer>
                <FlashMessages />
                <div className={`${style.freelancerOrder}`}>
                    <div className={`${style.freelancerOrderWrapper}`}>
                    <h2 className={`title`}>Active Tasks</h2>
                <div className={`${style.activeTasks}`}>
                    {ordersToShow.slice(0, showOrdersQty).map((order) => {
                        return <BasicCard key={order.id} props={order} />;
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
                </SectionContainer>
            <Footer />
        </>
    );
}
