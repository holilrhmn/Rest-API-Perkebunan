@extends('layout')
@section('title', 'ver')
@section('content')
	<table class="table table-striped table-hover table-bordered">
		<tr>
			<td>ID</td>
			<td>{{ $kebun->id }}</td>
		</tr>
		<tr>
			<td>Nama Pemilik</td>
			<td>{{ $kebun->Nama_Pemilik }}</td>
		</tr>
		<tr>
			<td>Jenis Perkebunan</td>
			<td>{{ $kebun->jenis_perkebunan }}</td>
		</tr>
		<tr>
			<td>Deskripsi</td>
			<td>${{ $kebun->Deskripsi }}</td>
        </tr>
        <tr>
			<td>Luas Lahan</td>
			<td>{{ $kebun->Luas_lahan }}</td>
		</tr>
		<tr>
			<td>Waktu Tanam</td>
			<td>{{ $kebun->Waktu_Tanam }}</td>
		</tr>
		<tr>
			<td>Waktu Panen</td>
			<td>{{ $kebun->Waktu_panen }}</td>
		</tr>
	</table>

	<a class="btn btn-dark" href="{{url('perkebunan')}}">Regresar</a>
	<a class="btn btn-warning" href="{{url('perkebunan/' . $kebun->id. '/edit')}}">Edit</a>
	<form method="post" action="{{url('perkebunan', $kebun->id)}}">
		@csrf()
		@method('DELETE')
		<input class="btn btn-danger" type="submit" value="Hapus" />
	</form>
@endsection