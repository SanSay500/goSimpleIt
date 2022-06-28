import React, { useState } from "react";
import HeaderLogin from "@/components/shared/headers/headerLogin/headerLogin";
import Footer from "@/components/shared/footer/footer";
import { usePage, Link, useForm } from "@inertiajs/inertia-react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const OrderDetails = (props) => {
    const { order } = usePage().props;
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

    return (
        <>
            <HeaderLogin role={props.auth.user && props.auth.user.role} />

            <Container maxWidth="sm">
                <br />

                <Card variant="outlined">
                    <CardContent>
                        <b>Order date:</b> {order.created_at.split("T")[0]}{" "}
                        <br />
                        <b>Order title:</b> {order.title}
                        <br />
                        <b>Order description:</b> {order.description}
                        <br />
                        <b>Order cost:</b> {order.money}$<br />
                        <b>Order term:</b> {order.hours} days
                        <br />
                        {props.auth.user &&
                            props.auth.user.role === "Freelancer" &&
                            !hideButton && (
                                <button
                                    onClick={(e) => {
                                        setShowProposalForm(true);
                                        setHideButton(true);
                                    }}
                                    className="content-center p-2 bg-sky-500 text-bg font-medium text-gray-900 bg-blue rounded-full"
                                >
                                    Make Proposal
                                </button>
                            )}
                        {showProposalForm && (
                            <form name="createForm" onSubmit={handleSubmit}>
                                <label>
                                    {" "}
                                    Describe your proposal for this job
                                </label>

                                <br />

                                <textarea
                                    required
                                    name="description"
                                    onChange={(e) =>
                                        setData("description", e.target.value)
                                    }
                                />

                                <br />

                                <button
                                    type="submit"
                                    className="p-2 bg-sky-500 text-bg font-medium text-gray-900 bg-blue rounded-full"
                                >
                                    Send proposal
                                </button>
                            </form>
                        )}
                        <br />
                        <br />
                        <Link
                            className="p-2 bg-sky-500 text-bg font-medium text-gray-900 bg-blue rounded-full"
                            href={route("main.page")}
                        >
                            Back
                        </Link>
                    </CardContent>
                </Card>
            </Container>
            <Footer />
        </>
    );
};

export default OrderDetails;
