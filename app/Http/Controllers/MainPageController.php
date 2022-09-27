<?php

namespace App\Http\Controllers;

use App\Models\SeoTag;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MainPageController extends Controller
{
    public function private_policy(){
        $seo = SeoTag::find(1)->get();
        return Inertia::render('shared/privacyPolicy/pp',['seo'=>$seo]);

    }
}

