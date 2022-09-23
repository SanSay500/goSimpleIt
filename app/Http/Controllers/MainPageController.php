<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class MainPageController extends Controller
{
    public function private_policy(){
        return Inertia::render('shared/privacyPolicy/pp');

    }
}

