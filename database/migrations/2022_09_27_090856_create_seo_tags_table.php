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
        Schema::create('seo_tags', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('url')->nullable();
            $table->string('title')->nullable();
            $table->string('description')->nullable();
            $table->string('lang')->nullable();
            $table->string('ogTitle')->nullable();
            $table->string('ogType')->nullable();
            $table->string('ogTypeObject')->nullable();
            $table->string('ogImage')->nullable();
            $table->string('ogImageWidth')->nullable();
            $table->string('ogImageHeight')->nullable();
            $table->string('ogUrl')->nullable();
            $table->string('ogDescription')->nullable();
            $table->string('ogLocale')->nullable();
            $table->string('ogLocaleAlternate')->nullable();
            $table->string('ogSiteName')->nullable();
            $table->string('ogVideo')->nullable();
            $table->string('twitterSummaryCardImage')->nullable();
            $table->string('twitterSummaryCardImageAlt')->nullable();
            $table->string('twitterSummaryCardSiteUsername')->nullable();
            $table->string('twitterSummaryCardTitle')->nullable();
            $table->string('twitterSummaryCardDescription')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('seo_tags');
    }
};
