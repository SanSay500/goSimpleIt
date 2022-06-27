<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class DashboardPolicy
{
    use HandlesAuthorization;

    /**
     * Create a new policy instance.
     *
     * @return void
     */
    public function __construct()
    {
    }

    public function index_freelancer(){
        return Auth::user()->role==='Freelancer';
        }
    public function index_employer(){
        return Auth::user()->role==='Employer';
        }
}
