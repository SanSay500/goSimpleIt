<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('task_lvl2s', function (Blueprint $table) {
            $table->id();
            $table->string('type');
            $table->string('category')->nullable();
            $table->string('description')->nullable;
            $table->integer('minimum_time_in_hours')->nullable();
            $table->foreignId('task1_id')->constrained('task_lvl1s','id')->onDelete('cascade');
            $table->float('minimum_price')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('task_lvl2s');
    }
};
