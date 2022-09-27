<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreSeoTagRequest;
use App\Http\Requests\UpdateSeoTagRequest;
use App\Models\SeoTag;

class SeoTagController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreSeoTagRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreSeoTagRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\SeoTag  $seoTag
     * @return \Illuminate\Http\Response
     */
    public function show(SeoTag $seoTag)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\SeoTag  $seoTag
     * @return \Illuminate\Http\Response
     */
    public function edit(SeoTag $seoTag)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateSeoTagRequest  $request
     * @param  \App\Models\SeoTag  $seoTag
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateSeoTagRequest $request, SeoTag $seoTag)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\SeoTag  $seoTag
     * @return \Illuminate\Http\Response
     */
    public function destroy(SeoTag $seoTag)
    {
        //
    }
}
