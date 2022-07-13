import React, { useEffect, useState } from "react";
import { usePage } from "@inertiajs/inertia-react";
import ProposalsList from "./proposalsList/proposalsList";
import Container from "@/components/shared/container/container";
import style from "./dashboardFreelancer.module.css";
import ActiveTasks from "@/components/shared/activeTasks/activeTasks";

export default function DashboardFreelancer(props) {
    const { proposals, tasksWithOrders, ordersActive } = usePage().props;
    const [quantityCardsTasks, setQuantityCards] = useState(4);

    const resizeHandler = () => {
        let clientWidth = window.innerWidth;

        if (clientWidth < 577) {
            setQuantityCards(() => 1);
            return;
        }
        if (clientWidth > 1024) {
            setQuantityCards(() => 4);
            return;
        }
        if (clientWidth < 1025) {
            setQuantityCards(() => 2);
            return;
        }
    };

    useEffect(() => {
        window.addEventListener("resize", resizeHandler);
        resizeHandler();
    }, []);

    return (
        <>
            <Container styleContainer={style.container}>
                <div className={`${style.freelancerOrder}`}>
                    <div className={`${style.freelancerOrderWrapper}`}>
                        <ActiveTasks
                            user={props.auth.user}
                            quantityCardsTasks={quantityCardsTasks}
                            gridStyle={style.gridStyle}
                        />
                    </div>

                    <ProposalsList />
                </div>
            </Container>
        </>
    );
}
