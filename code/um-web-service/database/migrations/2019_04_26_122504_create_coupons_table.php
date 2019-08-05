<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCouponsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('coupons', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('code');
            $table->text('description');

            $table->double('discount');
            $table->integer('discount_type_id')->unsigned()->index()->nullable();
            $table->foreign('discount_type_id')->references('id')->on('discount_types');

            $table->timestamp('start_time')->nullable();
            $table->timestamp('end_time')->nullable();

            $table->integer('total_usage')->nullable();

            $table->integer('business_id')->unsigned()->index()->nullable();
            $table->foreign('business_id')->references('id')->on('business_partners');

            // 0:inactive 1:active 2:redeemed 3: expired
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
        Schema::dropIfExists('coupons');
    }
}
