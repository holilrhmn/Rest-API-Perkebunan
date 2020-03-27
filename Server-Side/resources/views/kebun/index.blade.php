@extends('layout')
@section('judul')
@section('content')
	<a class="btn btn-secondary" href="{{url('perkebunan/create')}}">Tambah Data</a>

	<table class="table table-sm table-dark table-striped table-hover table-bordered">
		<thead>
			<tr>
				<th>ID</th>
				<th>Nama Pemilik</th>
				<th>Jenis Perkebunan</th>
				<th>Deskripsi</th>
				<th>Luas Lahan (m2)</th>
				<th>Waktu Tanam</th>
				<th>Waktu Panen</th>
			</tr>
		</thead>
		<tbody>
			@foreach($kebun as $kebun)
			<tr>
                <td>{{ $kebun->id }}</td>
				<td>{{ $kebun->Nama_Pemilik }}</td>
				<td>{{ $kebun->jenis_perkebunan }}</td>
				<td>{{ $kebun->Deskripsi }}</td>
				<td>{{ $kebun->Luas_lahan }}</td>
				<td>{{ $kebun->Waktu_Tanam }}</td>
				<td>{{ $kebun->Waktu_panen }}</td>
				<td>
					<a class="btn btn-warning" href="{{url('perkebunan/' . $kebun->id. '/edit')}}">Edit</a>
				</td>
				<td>
					<form method="post" action="{{url('perkebunan', $kebun->id)}}">
						@csrf()
						@method('DELETE')
						<input class="btn btn-danger" type="submit" value="Hapus" />
					</form>
				</td>
			</tr>
			@endforeach
		</tbody>
	</table>
@endsection
