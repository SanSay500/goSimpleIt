import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import {Head, Link, usePage} from '@inertiajs/inertia-react';
import FlashMessages from "@/Pages/Shared/FlashMessages";
import Footer from "@/Components/footer.js";
import Container from '@mui/material/Container';
import HeaderDashboardContainer from "@/Components/HeaderLogout";


export default function ProposalConfirm(props) {
    const {order, proposal, user} = usePage().props;

    return (
        <div>
            <HeaderDashboardContainer/>
            <FlashMessages/>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <Container maxWidth="sm">
                                <div><b>Order number:</b> {order.id}</div>
                                <div><b>Order status:</b> {order.status}</div>
                                <div><b>Order title:</b> {order.title}</div>
                                <div><b>Order cost:</b> {order.money}$</div>
                                <div><b>Order term:</b> {order.hours} days</div>
                                <div><b>Order Freelancer:</b> {user.name}</div>
                                <div><b>Order proposal description:</b> {proposal.description}</div>
                                <div className="flex justify-between">
                                    {order.status !== 'In Work' ?
                                        <Link href={route('proposal.confirmation.store', [order.id, proposal.id])}
                                              className="p-2 bg-sky-500 text-bg font-medium text-gray-900 bg-blue rounded-full"
                                        >Confirm</Link>
                                        :
                                        <Link href={route('finish_order', [order.id, proposal.id])}
                                              className="p-2 bg-sky-500 text-bg font-medium text-gray-900 bg-blue rounded-full"
                                        >Finish Job</Link>

                                    }

                                    <Link href={route('start_chat', user.id)}
                                          className="p-2 bg-sky-500 text-bg font-medium text-gray-900 bg-blue rounded-full"
                                    >Chat</Link>
                                    <br/>
                                        <Link
                                            className="p-2 bg-sky-500 text-bg font-medium text-gray-900 bg-blue rounded-full"
                                            href={route('employer_dashboard_index')}>Back</Link>

                                </div>
                            </Container>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>

    );
}
