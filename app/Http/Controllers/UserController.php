<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;

class UserController extends Controller
{
    public function index(User $user)
    {
        return Inertia::render('pages/userProfilePage/userProfile');
    }

    public function info($id)
    {
        $user = User::where('id',$id)->first();
        return Inertia::render('pages/userProfilePage/userInfo/userInfo', ['user'=>$user]);
    }

    public function update(Request $request, User $user)
    {
        if ($avaFile = $request->file('avatar')) {
            $avaName = $avaFile->hashName();
            $avaPath = $avaName;
            $avaFile->storeAs('avatars', $avaName);
            !$user->avatar ?? Storage::delete($user->avatar);
        }

        $updateInfo = [
            'name' => $request->name,
            'description' => $request->description,
            'email' => $request->email,
            'avatar' => $avaFile ? $avaPath : $user->avatar,
        ];
        $user->update($updateInfo);
        return back()->with('success', 'Your profile information changed.');
    }
}
