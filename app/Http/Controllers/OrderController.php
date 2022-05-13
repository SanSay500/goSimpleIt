<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreOrderRequest;
use App\Http\Requests\UpdateOrderRequest;
use App\Models\Engine;
use App\Models\Task;
use App\Models\Order;
use App\Models\TaskLvl1;
use App\Models\TaskLvl2;
use App\Models\TaskLvl3;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $orders = Order::latest()->get();
        return Inertia::render('Order/Index', ['orders' => $orders, 'canLogin' => Route::has('login'),
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
        return Inertia::render('Order/Main', ['tasks'=>$tasks]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreOrderRequest  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(StoreOrderRequest $request)
    {
       //dd($request);
        Order::create(
            $request->validated()
        );
        Storage::putFile('tasks', $request->file('file'));

        //return Redirect::route('index');
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
