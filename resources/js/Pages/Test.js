import React, {useState, useEffect} from "react";
import {Elements, PaymentElement} from "@stripe/react-stripe-js";
import {loadStripe} from "@stripe/stripe-js";
import { usePage } from "@inertiajs/inertia-react";


const Checkout = () => {
    const { intent } = usePage().props;
    const stripe = loadStripe('pk_test_51L5XX3HhozgUP2ntncKiiUZMdMonwhj8zWUKbfWifDm60qTFwt0t4IG8D0EmikeoFbLDE8iJJC19pZRR2NUJFXKa0061gbsdvV');
    const options = {
        clientSecret:  intent.client_secret ,
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }

        setIsLoading(true);

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                // Make sure to change this to your payment completion page
                return_url: "http://0.0.0.0:90/index",
            },
        });

        // This point will only be reached if there is an immediate error when
        // confirming the payment. Otherwise, your customer will be redirected to
        // your `return_url`. For some payment methods like iDEAL, your customer will
        // be redirected to an intermediate site first to authorize the payment, then
        // redirected to the `return_url`.
        if (error.type === "card_error" || error.type === "validation_error") {
            setMessage(error.message);
        } else {
            setMessage("An unexpected error occurred.");
        }

        setIsLoading(false);
    };

    return (
        <div>

            <Elements stripe={stripe} options={ options }>
                <form id="payment-form" onSubmit={handleSubmit}>
                    <PaymentElement />
                    <button>Submit</button>
                </form>
            </Elements>
        </div>
    );
}

export default Checkout;



