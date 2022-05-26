import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import {Head, usePage} from '@inertiajs/inertia-react';
import FlashMessages from "@/Pages/Shared/FlashMessages";
import HeaderContainer from "@/Components/header.js";
import Footer from "@/Components/footer.js";


export default function Dashboard(props) {
    const {orders} = usePage().props;

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard - My Orders </h2>}
        >
            <FlashMessages/>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            Order number >>  Odred Title >>  Order Status
                            {orders.map(
                                (order) => {
                                    return (
                                        <p>{order.id} >> {order.title} >> {order.status}</p>
                                    )
                                }
                            )}
                            <br/>
                            <a href={route('main.page')}>Make another order</a>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
