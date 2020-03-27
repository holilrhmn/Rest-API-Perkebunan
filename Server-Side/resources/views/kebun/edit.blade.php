@extends('layout')
@section('title', 'edit')
@section('content')
	<form action="{{url('perkebunan', $perkebunan->id)}}" method="post">
		@csrf()
		@method('PUT')
		<input class="form-control" name="ID" placeholder="ID"  value="{{ $perkebunan->id }}" />
		<input class="form-control" name="Nama" placeholder="Nama_Pemilik" value="{{ $perkebunan->Nama_Pemilik }}" />
		<input class="form-control" name="jenis Perkebunan" type="text"  placeholder="jenis Perkebunan"  value="{{ $perkebunan->jenis_perkebunan}}" />
		<input class="form-control" name="deskripsi" type="text-area" placeholder="Deskripsi"  value="{{ $perkebunan->Deskripsi}}" />
		<input class="form-control" name="Luas Lahan" type="text" placeholder="Luas Lahan"  value="{{ $perkebunan->Luas_lahan}}" />
        <input class="form-control" name="waktu tanam" type="date" value="{{ $perkebunan->Waktu_Tanam }}" />
        <input class="form-control" name="waktu panen" type="date" value="{{ $perkebunan->Waktu_Tanam }}" />
		<input class="btn btn-success" type="submit" value="Update" />
	</form>
	<form method="post" action="{{url('perkebunan', $perkebunan->id)}}">
		@csrf()
		@method('DELETE')
		<input class="btn btn-danger" type="submit" value="hapus" />
	</form>
	<a class="btn btn-dark" href="{{url('perkebunan')}}">kembali</a>
@endsection
