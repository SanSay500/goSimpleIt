import React, {useState} from "react";
import HeaderLoginContainer from "@/Components/header.js";
import Footer from "@/Components/footer.js";
import {usePage, InertiaLink, Link, useForm} from "@inertiajs/inertia-react";

const OrderDetails = (props) => {
    const {order} = usePage().props;
    const {data, setData, errors, post} = useForm({
        'description': "",
        'order_id':order.id,
    });

    const [showProposalForm, setShowProposalForm] = useState(false);
    const [hideButton, setHideButton] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        post(route("order.proposal.store", data));
    }

    return (
        <>
            <HeaderLoginContainer/>

            {order.created_at} <br/>
            {order.title}<br/>
            {order.description}<br/>
            {!hideButton &&
                <button onClick={(e) => {
                    setShowProposalForm(true);
                    setHideButton(true);
                }
                }
                        className="bg-sky-500 text-bg font-medium text-gray-900 bg-blue"
                >Make Proposal</button>
            }

            {showProposalForm &&
                <form name="createForm" onSubmit={handleSubmit}>
                    <label> Describe your proposal for this job</label>
                    <br/>
                    <textarea name="description"
                              onChange={(e) =>
                                  setData("description", e.target.value)
                              }>

                </textarea>
                    {console.log(data)}
                    <br/>
                    <button type="submit" className="btn-submit">
                        Send proposal
                    </button>
                </form>
            }
            <Footer/>

        </>
    );

}

export default OrderDetails;
