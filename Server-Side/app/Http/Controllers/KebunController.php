<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Kebun;

class KebunController extends Controller
{
    public function all()
    {
        return Kebun::all();
    }

    public function show($id)
    {
        return Kebun::findOrFail($id);
    }

    public function store(Request $request)
    {
        $kebun = Kebun::create($request->all());
        return response()->json('Perkebunan Berhasil Ditambah');
    }

    public function update(Request $request, $id)
    {
        $kebun = Kebun::findOrFail($id);
        $kebun->update($request->all());
        return $kebun;
    }

    public function delete($id)
    {
        $kebun = Kebun::where('id', $id)->first();
        $kebun->delete();

        return response('Berhasil Menghapus Data');
    }
}
