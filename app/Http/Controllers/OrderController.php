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
use AmrShawky\LaravelCurrency\Facade\Currency;
use Illuminate\Support\Facades\DB;
use App\Models\CurrencyModel;
use Illuminate\Support\Facades\Hash;



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
        $orders = Order::where('status', 'Pending')->get()->toArray();
        $tasksIDsInOrders = [];
        $filesSize = [];
        $symbolCur = Auth::user() ? CurrencyModel::where('code', Auth::user()->currency)->first()->symbol : CurrencyModel::find(3)->symbol;
        $exchange_rate = Auth::user() ? CurrencyModel::where('code', Auth::user()->currency)->first()->exchange_rate : 1;

        $tasks = Task::get()->toArray();
        foreach ($tasks as $task => $value) {
            $tasks[$task]['money'] = round($value['money'] * $exchange_rate);
        }

        foreach ($orders as $order => $params) {

            if (Auth::user() && Auth::user()->currency != 'EUR') {
                $newCur = $orders[$order]['money'] * $exchange_rate;
                $orders[$order]['money'] = round($newCur);
            }

            $tasksIDsInOrders[] = $params['task_id'];
            $Orderfile = (Storage::path($params['file']));
            if (file_exists($Orderfile) && filetype($Orderfile) != 'dir') {
                $filesSize['filesize'] = round(Storage::size($params['file']) / 1024, 2) . ' Kb';
                $params += $filesSize;
                $orders[$order] += $params;
            }
        }
        $tasksWithOrders = Task::wherein('id', $tasksIDsInOrders)->get();
        return Inertia::render('pages/mainPage/main', ['tasks' => $tasks, 'orders' => $orders, 'tasksWithOrders' => $tasksWithOrders, 'symbolCur'=>$symbolCur]);
    }

    public function proposal_confirm_form($order_id, $proposal_id)
    {
        $order = Order::where('id', $order_id)->first()->toArray();
        $exchange_rate = CurrencyModel::where('code', Auth::user()->currency)->first()->exchange_rate;
        if (Auth::user()->currency != 'EUR') {
            $order['money'] = round($order['money'] * $exchange_rate);
        }
        $symbolCur = CurrencyModel::where('code', Auth::user()->currency)->first()->symbol;

        $proposal = Proposal::where('id', $proposal_id)->first();
        $user = User::where('id', $proposal->user_id)->first();
        return Inertia::render('pages/dashboardEmployerPage/proposalConfirmPage/proposalConfirm', ['user' => $user, 'order' => $order, 'proposal' => $proposal, 'symbolCur'=>$symbolCur]);
    }

    public function proposal_confirm($order_id, $proposal_id)
    {
        Order::where('id', $order_id)->update(['status' => 'In Work']);
        Proposal::where('id', $proposal_id)->update(['status' => 'Confirmed']);
        return Redirect::route('employer_dashboard_index')->with('success', 'You confirmed performer. You will be contacted soon for details');
    }

    public function finish_order($order_id, $proposal_id)
    {
        Order::where('id', $order_id)->update(['status' => 'Done']);
        Proposal::where('id', $proposal_id)->update(['status' => 'Done']);
        return Redirect::route('employer_dashboard_index')->with('success', 'Your order has been done! You can leave review about this.');
    }

    public function new_proposal(Request $request)
    {
        $user_id = Auth::user()->id;
        if (Proposal::where('user_id', $user_id)->where('order_id', $request->order_id)->exists()) {
            return Redirect::route('freelancer_dashboard_index')->with('error', 'Sorry, but you already have made a proposal for the task number ' . $request->order_id);
        } else {
            Proposal::create([
                'user_id' => $user_id,
                'order_id' => $request->order_id,
                'description' => $request->description,
                'status' => 'Sent',
            ]);
            return Redirect::route('freelancer_dashboard_index')->with('success', 'You have sent proposal for the task number ' . $request->order_id);
        }
    }

    public function details($order_id)
    {
        $order = Order::where('id', $order_id)->first()->toArray();
        $exchange_rate = Auth::user() ? CurrencyModel::where('code', Auth::user()->currency)->first()->exchange_rate : 1;
        if (Auth::user() && Auth::user()->currency != 'EUR') {
            $newCur = $order['money'] * $exchange_rate;
            $order['money'] = round($newCur);
        }
        $symbolCur = Auth::user() ? CurrencyModel::where('code', Auth::user()->currency)->first()->symbol : CurrencyModel::find(3)->symbol;
        if (Auth::user()) {
            $proposals = Proposal::where('user_id', Auth::user()->id)->get()->toArray();

            $checkHaveProposal = false;

            foreach ($proposals as $proposal) {
                if ($proposal['order_id'] === $order['id']) {
                    $checkHaveProposal = true;
                }
            }
        }

        $Orderfile = (Storage::path($order['file']));

        if (file_exists($Orderfile) && filetype($Orderfile) != 'dir') {
            $filesSize['filesize'] = round(Storage::size($order['file']) / 1024, 2) . ' Kb';
            $order += $filesSize;
        }
        return Inertia::render('pages/orderDetailsPage/orderDetails', ['orders' => $order, 'checkHaveProposal' => $checkHaveProposal ?? '', 'symbolCur'=>$symbolCur]);

    }


    /**
     * Store a newly created resource in storage.
     *
     * @param \App\Http\Requests\StoreOrderRequest $request
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
            'email' => ''
        ]);
        if (isset($request->file)) {
            $fileName = time() . '-' . $request->file->getClientOriginalName();
            $request->validate([
                'file' => 'required|mimes:md,csv,txt,xlsx,xls,pdf,jpg,png,docx,gif,svg,doc|max:100048'
            ]);
            Storage::putFileAs('/', $request->file('file'), $fileName);
        }
        $task_type = Task::where('id', $request->task_id)->get()->first();

        if (!Auth::user()) {
            $user = User::firstOrCreate(
            ['email' => $request->email],
            ['name' => $request->email,
            'role' => 'Customer',
            'currency' => 'EUR',
            'password' => bin2hex(random_bytes(8)),
            ]);
            Auth::login($user);
        }

        $exchange_rate = CurrencyModel::where('code', Auth::user()->currency)->first()->exchange_rate;

        Order::create([
            'title' => $request->title,
            'description' => $request->description,
            'file' => $fileName ?? '',
            'money' => $request->cost / $exchange_rate,
            'task_id' => $task_type->id,
            'hours' => $request->time,
            'user_id' => Auth::user()->id,
            'status' => 'Pending',
        ]);
        $order = Order::get()->last();

        if (isset($user) and ($user->created_at >= today())) {
            Mail::to($request->email)->send(new NewOrderWithReg($order, $user));
            Mail::to('info@gosimple.it')->send(new NewOrder($order));
            return Redirect::route('employer_dashboard_index')->with('success', 'Order created. Your password sent to your e-mail. Thank you!');
        } else {
            Mail::to(Auth::user())->send(new NewOrder($order));
            Mail::to('info@gosimple.it')->send(new NewOrder($order));
            return Redirect::route('employer_dashboard_index')->with('success', 'Order created. Thank you!');
        }

    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Order $order
     * @return \Inertia\Response
     */
    public function show(Order $order)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Models\Order $order
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
     * @param \App\Http\Requests\UpdateOrderRequest $request
     * @param \App\Models\Order $order
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
     * @param \App\Models\Order $order
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(Order $order)
    {
        $order->delete();

        return Redirect::route('orders.destroy');
    }
}
