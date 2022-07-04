import React from "react";
import { Link, usePage } from "@inertiajs/inertia-react";
import FlashMessages from "@/components/shared/flashMessages/flashMessages";
import Footer from "@/components/shared/footer/footer";
import ProposalsList from "./proposalsList/proposalsList";
import HeaderLogout from "@/components/shared/headers/headerLogout/headerLogout";
import ActiveTasks from "@/components/shared/activeTasks/activeTasks";
import style from "./dashboardFreelancer.module.css";

export default function DashboardFreelancer(props) {
    const { proposals, tasksWithOrders, ordersActive } = usePage().props;

    return (
        <>
            <HeaderLogout title="Dashboard" />
            <div className="container">
                <FlashMessages />
                <div className={`${style.freelancerOrder}`}>
                    <ActiveTasks count={4} classes={style.activeTasks} />
                    <ProposalsList />
                </div>
            </div>
            <Footer />
        </>
    );
}
