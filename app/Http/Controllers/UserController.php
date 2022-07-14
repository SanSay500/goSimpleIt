<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;

class UserController extends Controller
{
   public function index(User $user){
    return Inertia::render('pages/userProfilePage/userProfile');
   }

    public function update(Request $request, User $user)
    {

        $updateInfo = [
            'name' => $request->name,
            'description' =>$request->description,
            'email' => $request->email,
            'avatar' => $request->avatar,
        ];
        dd($updateInfo);
        $user->update($updateInfo);
        return Redirect::route('user_profile');
    }
}
