<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');

            // 0:inactive 1:active 2:suspended 3:archived
            $table->integer('status')->default(1);

            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');

            $table->string('nationality')->nullable();

            $table->integer('university_id')->unsigned()->index()->nullable();
            $table->foreign('university_id')->references('id')->on('universities');

            $table->integer('avatar_id')->unsigned()->index()->nullable();
            $table->foreign('avatar_id')->references('id')->on('resources')->onDelete('cascade');

            $table->integer('student_id_image_id')->unsigned()->index()->nullable();
            $table->foreign('student_id_image_id')->references('id')->on('resources')->onDelete('cascade');

            $table->string('description')->nullable();
            /**
             * contact details
             */
            $table->string('phone')->nullable();
            $table->timestamp('phone_verified_at')->nullable();

            $table->timestamp('last_login')->nullable();
            $table->string('rest_token')->nullable();
            $table->rememberToken();

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
        Schema::dropIfExists('users');
    }
}
