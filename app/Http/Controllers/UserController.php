<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;

class UserController extends Controller
{
   public function index(User $user){
    return Inertia::render('pages/userProfilePage/userProfile');
   }

    public function update(Request $request, User $user)
    {
        $avaFile = $request->file('avatar');

        $avaName = $avaFile->hashName();

        $avaPath = $avaFile->storeAs('avatars', $avaName);
        $updateInfo = [
            'name' => $request->name,
            'description' =>$request->description,
            'email' => $request->email,
            'avatar' => $avaPath,
        ];
        $user->update($updateInfo);
        return back()->with('success', 'Your profile information changed.');
    }
}
