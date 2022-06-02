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
        $orders = Order::all();
        return Inertia::render('Order/Main', ['tasks'=>$tasks, 'orders'=>$orders]);
    }

    public function proposal_confirm($order_id, $proposal_id)
    {
      //$get_order_id=Proposal::where('id',$proposal_id)->get();
      Order::where('id',$order_id)->update(['status'=>'In Work']);
      Proposal::where('id',$proposal_id)->update(['status'=>'Confirmed']);
      return Redirect::route('dashboard')->with('success', 'You confirmed performer. You will be contacted soon for details');

    }

    public function new_proposal($order_id)
    {
        Proposal::create([
            'user_id'=> Auth::user()->id,
            'order_id' => $order_id,
            'status' => 'Sent',
        ]);
        return Redirect::route('dashboard')->with('success', 'You sent proposal for task number '.$order_id);
    }

    public function details($order_id)
    {

        $order=Order::where('id', $order_id)->first()->toArray();
//        dd($order);
        return Inertia::render('Order/OrderDetails', ['order'=>$order]);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreOrderRequest  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(StoreOrderRequest $request)
    {
        if (isset($request->file)) {
            $fileName  = time() .'-'. $request->file->getClientOriginalName();
            $request->validate([
                'file' => 'required|mimes:md,csv,txt,xlsx,xls,pdf,jpg,png,gif,svg,doc|max:10048'
            ]);
            Storage::putFileAs('/', $request->file('file'), $fileName);
        }
//        if (!Auth::user()) {
//            $user = User::create([
//                'name' => 'Neo',
//                'email' => $request->email,
//                'phone' => $request->phone,
//                'password' => bcrypt('entrity567'),
//            ]);
//            Auth::login($user);
//        }
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
        return Redirect::route('dashboard')->with('success', 'Order created.');
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
