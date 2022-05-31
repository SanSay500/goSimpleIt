<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Proposal;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Http\Resources\Json;

class DashboardController extends Controller
{
    public function index()
    {
        $user = Auth::user()->toArray();
        $orders = Order::leftjoin('proposals', 'orders.id', '=', 'proposals.order_id')
            ->where('orders.user_id', $user['id'])->get(['orders.id as order_id', 'orders.title', 'orders.status as order_status', 'proposals.id as proposal_id', 'proposals.user_id as user_proposal_id', 'proposals.status as proposal_status']);
//        foreach ($orders as $ord) {
//            $orders_ids [] = $ord->id;
//        }
        //$propo = Proposal::whereIn('order_id', $orders_ids)->get();
        //dd($orders_ids, $propo);
        $proposals = Proposal::where('user_id', $user['id'])->get();
        //$orders_proposals = Proposal::whereIn('order_id', $orders_ids)->get();

        //dd($orders_proposals);
        if ($user['role'] === 'Freelancer') {
            return Inertia::render('Dashboard', ['proposals' => $proposals]);
        }
        if ($user['role'] === 'Employer') {
            return Inertia::render('Dashboard', ['orders' => $orders]);
        }
    }

}
