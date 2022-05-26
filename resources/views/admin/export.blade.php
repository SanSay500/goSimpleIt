@extends(backpack_view('blank'))

@section('content')
    <h1>Export Orders</h1>
    <a href={{route('export.orders')}}>Export Orders</a>

@endsection
