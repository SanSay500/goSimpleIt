import React, {useRef} from "react";
import HeaderLoginContainer from "@/Components/header.js";
import Footer from "@/Components/footer.js";
import { usePage, InertiaLink, Link } from "@inertiajs/inertia-react";

const OrderDetails = (props) =>{
    const { order } = usePage().props;
return (
    <>
    <HeaderLoginContainer/>
        { console.log(order) }
        {order.created_at} <br/>
        {order.title}<br/>
        {order.description}<br/>
        <Link href={route('order.proposal', [order.id]) }
              className="bg-sky-500 text-bg font-medium text-gray-900 bg-blue"
        > Make Proposal </Link>

    <Footer/>

    </>
);

}

export default OrderDetails;
