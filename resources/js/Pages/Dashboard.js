import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import {Head, Link, usePage} from '@inertiajs/inertia-react';
import FlashMessages from "@/Pages/Shared/FlashMessages";
import HeaderContainer from "@/Components/header.js";
import Footer from "@/Components/footer.js";


export default function Dashboard(props) {
    const {orders, proposals, haveProposal} = usePage().props;

    function showOrder(order)
    {
        if (order.order_id){
            return true;
        }
    }
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
                            {proposals &&
                                proposals.map(
                                    (proposal) => {
                                        return (
                                            <p key={proposal.id}> { proposal.id } >> {proposal.status}</p>
                                        )
                                    }
                                )
                            }

                            {orders && <b> Order Number  >>>  Order title   >>> Order status</b>}
                            {orders &&
                                orders.map(
                                (order, index, array) => {
                                    return (
                                        <div>
                                            { index-1 >= 0 ?
                                                 (order.order_id != array[index-1].order_id) &&
                                          <p key={order.order_id}> { order.order_id } >> {order.title} >> <b>{order.order_status}</b></p>
                                            :
                                                <p key={order.order_id}> { order.order_id } >> {order.title} >> <b>{order.order_status}</b></p>

                                            }
                                            {order.proposal_id &&
                                                 order.order_status === 'Pending' &&
                                                <p>You have proposal from freelancer on this task ->
                                                <Link href={route('confirm.proposal', [order.order_id, order.proposal_id])}
                                                className="bg-sky-500 text-bg font-medium text-gray-900 bg-blue"
                                                >Confirm</Link> >> {console.log()}
                                                <Link href={route('start_chat', order.user_proposal_id)}
                                                className="bg-sky-500 text-bg font-medium text-gray-900 bg-blue"
                                                >Chat</Link></p>
                                            }


                                        </div>
                                    )
                                }
                            )
                            }

                            <br/>
                            <Link href={route('main.page')}>Main</Link>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
