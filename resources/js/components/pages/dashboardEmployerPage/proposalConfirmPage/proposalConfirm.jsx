import React from "react";
import { Link, usePage } from "@inertiajs/inertia-react";
import FlashMessages from "@/components/shared/flashMessages/flashMessages";
import Footer from "@/components/shared/footer/footer";
import Container from "@mui/material/Container";
import HeaderLogout from "@/components/shared/headers/headerLogout/headerLogout";
import style from "./proposalConfirm.module.css";
import BasicCard from "@/components/shared/activeTasks/basicCard/basicCard";
import SectionContainer from "@/components/shared/sectionContainer/sectionContainer"

export default function ProposalConfirm(props) {
    const { order, proposal, user } = usePage().props;

    function Goback() {
        window.history.back();
    }


    return (
        <div>
            <HeaderLogout />
            <SectionContainer>
                <div className={`${style.orderWrapper}`}>
                    <FlashMessages />
                    <div className={`${style.orderContainer}`}>
                        <div className={`${style.proposalContainer}`}>
                            <Link
                                as="button"
                                type="button"
                                onClick={Goback}
                                className={`${style.buttonBack}`}
                            >
                                <img
                                    src="/images/arrowLeft.svg"
                                    alt=""
                                    className={`${style.buttonBackImg}`}
                                />
                                Back
                            </Link>
                            <div className={`${style.proposalItem}`}>
                                <span className={`${style.proposalItemText}`}>
                                    Order Freelancer:{" "}
                                </span>
                                {user.name}
                            </div>

                            <div className={`${style.proposalItem}`}>
                                <span className={`${style.proposalItemText}`}>
                                    Order proposal description:{" "}
                                </span>
                                {proposal.description}
                            </div>

                            <div className={`${style.proposalBtnContainer}`}>
                                {order.status !== "In Work" ? (
                                    <Link
                                        href={route(
                                            "proposal.confirmation.store",
                                            [order.id, proposal.id]
                                        )}
                                        className={`${style.proposalBtn}`}
                                    >
                                        Confirm
                                    </Link>
                                ) : (
                                    <Link
                                        href={route("finish_order", [
                                            order.id,
                                            proposal.id,
                                        ])}
                                        className={`${style.proposalBtn}`}
                                    >
                                        Finish Job
                                    </Link>
                                )}

                                <Link
                                    href={route("start_chat", user.id)}
                                    className={`${style.proposalBtn}`}
                                >
                                    Chat
                                </Link>
                            </div>
                        </div>
                        <div className={`${style.cardContainer}`}>
                            <BasicCard
                                key={order.id}
                                props={order}
                                classes={style.btn}
                            />
                        </div>
                    </div>
                </div>
            </SectionContainer>

            <Footer />
        </div>
    );
}
