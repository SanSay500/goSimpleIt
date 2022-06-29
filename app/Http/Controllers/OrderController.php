<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\User;
use App\Models\Task;
use App\Models\Proposal;
use App\Http\Requests\StoreOrderRequest;
use App\Http\Requests\UpdateOrderRequest;
use App\Mail\NewOrder;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use App\Mail\NewOrderWithReg;
use Illuminate\Http\Request;


class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        return Inertia::render('Order/Index', ['canLogin' => Route::has('login'),
        'canRegister' => Route::has('register')]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Inertia\Response
     */
    public function main()
    {
        $tasks = Task::all();
        $orders = Order::where('status','Pending')->get();
        $tasksIDsInOrders = [];

        foreach ($orders->toArray() as $order)
            $tasksIDsInOrders[] = $order['task_id'];

            $tasksWithOrders = Task::wherein('id', $tasksIDsInOrders)->get();

        return Inertia::render('pages/mainPage/main', ['tasks'=>$tasks, 'ordersActive'=>$orders, 'tasksWithOrders'=>$tasksWithOrders]);
    }

    public function proposal_confirm_form($order_id, $proposal_id)
    {
        $order = Order::where('id', $order_id)->first();
        $proposal = Proposal::where('id', $proposal_id)->first();
        $user = User::where('id', $proposal->user_id)->first();
        return Inertia::render('pages/dashboardEmployerPage/proposalConfirmPage/proposalConfirm', ['user'=>$user, 'order'=>$order, 'proposal'=>$proposal] );
    }

    public function proposal_confirm($order_id, $proposal_id)
    {
        Order::where('id',$order_id)->update(['status'=>'In Work']);
        Proposal::where('id',$proposal_id)->update(['status'=>'Confirmed']);
        return Redirect::route('employer_dashboard_index')->with('success', 'You confirmed performer. You will be contacted soon for details');
    }

    public function finish_order($order_id, $proposal_id)
    {
        Order::where('id',$order_id)->update(['status'=>'Done']);
        Proposal::where('id',$proposal_id)->update(['status'=>'Done']);
        return Redirect::route('employer_dashboard_index')->with('success', 'Your order has been done! You can leave review about this.');
    }

    public function new_proposal(Request $request)
    {
        Proposal::create([
            'user_id'=> Auth::user()->id,
            'order_id' => $request->order_id,
            'description' => $request->description,
            'status' => 'Sent',
        ]);
        return Redirect::route('freelancer_dashboard_index')->with('success', 'You sent proposal for task number '.$request->order_id);
    }

    public function details($order_id)
    {
        $order=Order::where('id', $order_id)->first()->toArray();
//        dd($order);
        return Inertia::render('pages/orderDetailsPage/orderDetails', ['order'=>$order]);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreOrderRequest  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(StoreOrderRequest $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'cost' => 'required|numeric',
            'task_id' => 'required|numeric',
            'time' => 'required|numeric',
        ]);
        if (isset($request->file)) {
            $fileName  = time() .'-'. $request->file->getClientOriginalName();
            $request->validate([
                'file' => 'required|mimes:md,csv,txt,xlsx,xls,pdf,jpg,png,gif,svg,doc|max:10048'
            ]);
            Storage::putFileAs('/', $request->file('file'), $fileName);
        }
        $task_type=Task::where('id', $request->task_id)->get()->first();
        Order::create([
            'title' => $request->title,
            'description' => $request->description,
            'file' => $fileName ?? '',
            'money' => $request->cost,
            'task_id' => $task_type->id,
            'hours' => $request->time,
            'user_id' => Auth::user()->id,
            'status' => 'Pending',
        ]);
        $order = Order::get()->last();

        if (isset($user)) {
            Mail::to($request->email)->send(new NewOrderWithReg($order, $user));
        } else {
            Mail::to(Auth::user())->send(new NewOrder($order));
        }
        //Mail::to(Auth::user()->email)->send(new NewReservationClient($order));
        return Redirect::route('employer_dashboard_index')->with('success', 'Order created.');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Order  $order
     * @return \Inertia\Response
     */
    public function show(Order $order)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Order  $order
     * @return \Inertia\Response
     */
    public function edit(Order $order)
    {
        return Inertia::render('Order/Edit', [
            'order' => [
                'id' => $order->id,
                'title' => $order->title,
                'description' => $order->description
            ]
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateOrderRequest  $request
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(UpdateOrderRequest $request, Order $order)
    {
        $order->update($request->validated());
        return Redirect::route('orders.update');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(Order $order)
    {
        $order->delete();

        return Redirect::route('orders.destroy');
    }
}
