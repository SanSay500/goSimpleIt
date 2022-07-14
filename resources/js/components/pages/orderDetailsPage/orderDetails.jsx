import React, { useState } from "react";
import { usePage, Link, useForm } from "@inertiajs/inertia-react";
import BasicCard from "@/components/shared/activeTasks/basicCard/basicCard";
import ButtonGreen from "@/components/shared/buttonGreen/buttonGreen";
import style from "./orderDetails.module.css";
import Container from "@/components/shared/container/container";

const OrderDetails = (props) => {
    const { order, checkHaveProposal } = usePage().props;
    const { data, setData, errors, post } = useForm({
        description: "",
        order_id: order.id,
    });

    const [showProposalForm, setShowProposalForm] = useState(false);
    const [hideButton, setHideButton] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        post(route("order.proposal.store", data));
    }

    function Goback() {
        window.history.back();
    }

    return (
        <Container styleContainer={style.container}>
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

                {props.auth.user &&
                    props.auth.user.role === "Freelancer" &&
                    (checkHaveProposal ? (
                        <div className={`${style.respondedOrder}`}>
                            You responded to the order!
                        </div>
                    ) : (
                        <form
                            name="createForm"
                            onSubmit={handleSubmit}
                            className={`${style.formProposal} `}
                        >
                            <textarea
                                required
                                name="description"
                                rows="4"
                                className={`${style.loginInput} `}
                                placeholder="Describe your proposal for this job"
                                onChange={(e) =>
                                    setData("description", e.target.value)
                                }
                            />
                            <ButtonGreen>Send proposal</ButtonGreen>
                        </form>
                    ))}
            </div>

            <div className={`${style.cardContainer}`}>
                <BasicCard key={order.id} props={order} classes={style.btn} />
            </div>
        </Container>
    );
};

export default OrderDetails;
