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
use Illuminate\Support\Facades\Storage;

class DashboardController extends Controller
{

    public function freelancer_dashboard_index()
    {
        $user = Auth::user();
        $proposals = Proposal::where('user_id', $user->id)->get();
        $ordersActive = Order::where('status','Pending')->get()->toArray();
        $tasksIDsInOrders=[];
        $filesSize = [];


        foreach ($ordersActive as $order => $params) {
            $tasksIDsInOrders[] = $params['task_id'];
            $Orderfile = (Storage::path($params['file']));
            if (file_exists($Orderfile) && filetype($Orderfile)!='dir') {
                $filesSize['filesize'] = round(Storage::size($params['file']) / 1024, 2) . ' Kb';
                $params +=$filesSize;
                $ordersActive[$order] += $params;
            }
        }
        $tasksWithOrders = Task::wherein('id', $tasksIDsInOrders)->get();

        return Inertia::render('pages/dashboardFreelancerPage/dashboardFreelancer', ['proposals' => $proposals, 'tasksWithOrders'=>$tasksWithOrders, 'ordersActive'=>$ordersActive]);

    }

    public function employer_dashboard_index()
    {
        $user = Auth::user();
        $orders = Order::where('user_id', $user->id)->latest()->get();

        $ordersIDs[]='';
        foreach ($orders->toArray() as $order)
            $ordersIDs[] = $order['id'];

        $proposalsForOrder = Proposal::wherein('order_id', $ordersIDs)->join('users', 'proposals.user_id', '=','users.id')
            ->select('users.name', 'proposals.*')->get();

        return Inertia::render('pages/dashboardEmployerPage/dashboardEmployer', ['orders' => $orders, 'proposalsForOrder' => $proposalsForOrder]);

    }

    public function start_chat()
    {
        return route('start_chat');
    }

}
