<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateKebunsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('kebuns', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('Nama_Pemilik');
            $table->string('jenis_perkebunan');
            $table->longText('Deskripsi');
            $table->integer('Luas_lahan');
            $table->date('Waktu_Tanam');
            $table->date('Waktu_panen');
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
        Schema::dropIfExists('kebuns');
    }
}
