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
        $orders = Order::where('orders.user_id', $user['id'])->get();

        foreach ($orders->toArray() as $order)
            $ordersIDs[] = $order['id'];

        $proposalsForOrder = Proposal::wherein('order_id', $ordersIDs)->get();

        $proposals = Proposal::where('user_id', $user['id'])->get();
        if ($user['role'] === 'Freelancer') {
            return Inertia::render('Dashboard', ['proposals' => $proposals]);
        }
        if ($user['role'] === 'Employer') {
            return Inertia::render('Dashboard', ['orders' => $orders, 'proposalsForOrder' => $proposalsForOrder]);
        }
    }

    public function start_chat()
    {
        return route('start_chat');
    }

}
