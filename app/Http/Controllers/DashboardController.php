<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Proposal;
use App\Models\Task;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Http\Resources\Json;

class DashboardController extends Controller
{

    public function freelancer_dashboard_index()
    {
        $user = Auth::user();

        $proposals = Proposal::where('user_id', $user->id)->get();

        $ordersActive = Order::where('status','Pending')->get();

        $tasksIDsInOrders[]='';
        foreach ($ordersActive->toArray() as $order)
            $tasksIDsInOrders[] = $order['task_id'];

        $tasksWithOrders = Task::wherein('id', $tasksIDsInOrders)->get();

        return Inertia::render('DashboardFreelancer', ['proposals' => $proposals, 'tasksWithOrders'=>$tasksWithOrders, 'ordersActive'=>$ordersActive]);

    }

    public function employer_dashboard_index()
    {
        $user = Auth::user();
        $orders = Order::where('user_id', $user->id)->get();

        $ordersIDs[]='';
        foreach ($orders->toArray() as $order)
            $ordersIDs[] = $order['id'];

        $proposalsForOrder = Proposal::wherein('order_id', $ordersIDs)->get();

        return Inertia::render('DashboardEmployer', ['orders' => $orders, 'proposalsForOrder' => $proposalsForOrder]);

    }

    public function start_chat()
    {
        return route('start_chat');
    }

}
