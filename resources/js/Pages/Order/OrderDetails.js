import React, {useRef} from "react";
import HeaderContainer from "@/Components/header.js";
import Footer from "@/Components/footer.js";
import { InertiaLink, Link } from "@inertiajs/inertia-react";

const OrderDetails = (props) =>{
return (
    <>
    <HeaderContainer/>
        {console.log(props)}
        {props.props}
    <Footer/>
    </>
);

}

export default OrderDetails;
