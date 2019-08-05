<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBusinessPartnerSTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('business_partners', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');

            $table->integer('logo_id')->unsigned()->index()->nullable();
            $table->foreign('logo_id')->references('id')->on('resources')->onDelete('cascade');
            $table->text('description');

            $table->integer('category_id')->unsigned()->index()->nullable();
            $table->foreign('category_id')->references('id')->on('categories');

            $table->string('location')->nullable();
            $table->string('geohash')->nullable();
            $table->float('lat', 10,6)->nullable();
            $table->float('lng', 10,6)->nullable();

            $table->string('phone')->nullable();
            $table->string('website')->nullable();

            // 0:inactive 1:active 2:suspended 3:archived
            // default 1 active
            $table->integer('status')->default(1);
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
        Schema::dropIfExists('business_partners');
    }
}
