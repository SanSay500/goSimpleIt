import React, { useState, useEffect, useRef } from "react";
import { InertiaLink, usePage, useForm } from "@inertiajs/inertia-react";

const ActiveOrders = (props) => {
    const { data, setData, errors, post } = useForm({
        title: "",
        description: "",
        money: "",
        hours: "",
        file: "",
    });

    const { tasks } = usePage().props;
}
