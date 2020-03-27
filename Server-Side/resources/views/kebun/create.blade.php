@extends('layout')
@section('title', 'create')
@section('content')
	<form action="{{url('perkebunan')}}" method="POST">
		@csrf()
		<input class="form-control" name="Nama_Pemilik" type="text" placeholder="Nama Pemilik" />
		<input class="form-control" name="jenis_perkebunan" placeholder="Jenis Perkebunan" />
		<input class="form-control" name="Deskripsi" type="text-area" min="1" placeholder="Deskripsi" />
		<input class="form-control" name="Luas_lahan" type="text" min="1" placeholder="Luas Lahan"/>
        <input class="form-control" name="Waktu_Tanam" type="date" />
        <input class="form-control" name="Waktu_panen" type="date" />

		<input class="btn btn-primary" type="submit" value="Tambah" />
	</form>

	<a class="btn btn-dark" href="{{url('perkebunan')}}">Kembali</a>
@endsection
