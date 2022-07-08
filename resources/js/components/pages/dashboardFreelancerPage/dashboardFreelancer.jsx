import React from "react";
import { usePage } from "@inertiajs/inertia-react";
import ProposalsList from "./proposalsList/proposalsList";
import Container from "@/components/shared/container/container";
import style from "./dashboardFreelancer.module.css";
import ActiveTasks from "@/components/shared/activeTasks/activeTasks";

export default function DashboardFreelancer(props) {
    const { proposals, tasksWithOrders, ordersActive } = usePage().props;

    return (
        <>
            <Container styleContainer={style.container}>
                <div className={`${style.freelancerOrder}`}>
                    <div className={`${style.freelancerOrderWrapper}`}>
                        <ActiveTasks count={4} gridStyle={style.gridStyle}/>
                    </div>
                    
                    <ProposalsList />
                </div>
            </Container>
        </>
    );
}
