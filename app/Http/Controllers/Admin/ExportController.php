<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Order;
use XMLWriter;
use Illuminate\Support\Facades\Storage;



class ExportController extends Controller
{
    public function index()
    {

        return view('admin.export');
    }

    public function export()
    {
        $orders = Order::all('id', 'title', 'money', 'description', 'created_at');
        try {
            $fileName = 'orders-'.date('d.m.y').'.xml';
            $xml = new XMLWriter();
            $xml->openURI(Storage::path($fileName));
            $xml->startDocument('1.0');
            $xml->setIndent(1);
            $xml->startElement('orders');
            foreach ($orders as $order) {
                $xml->startElement('order');
                $xml->writeElement('id', $order->id);
                $xml->writeElement('title', $order->title);
                $xml->writeElement('description', $order->description);
                $xml->writeElement('created_at', $order->created_at);
                $xml->writeElement('money', $order->money);
                $xml->endElement();
            }

            $xml->endElement();
            $xml->endDocument();
            $xml->flush();
            return Storage::download($fileName);
            //Session::flash('success', 'success.');
        } catch (Exception $e) {
            //Session::flash('error', 'problem');
        }
    }
}


