<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use GuzzleHttp\Client;

class DataController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    private $client;

    public function __construct () {
        $this->client = new Client(['base_uri' => 'http://localhost:8000/perkebunan/']);
    }
    public function index()
    {
        $response = $this->client->get('');
        $client = $response->getBody();
        return view('kebun.index', ['kebun' => json_decode($client)]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('kebun.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->client->post('http://localhost:8000/perkebunan/save', [
            'json' => $request->all()
        ]);

        return redirect('/perkebunan');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $response = $this->client->get($id);
        $client= $response->getBody();
        return view('kabun.ver', ['kebun' => json_decode($client)]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $response = $this->client->get($id);
        $client = $response->getBody();
        return view('kebun.edit', ['perkebunan' => json_decode($client)]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->client->put($id ,[
            'headers' => [
                'Content-Type' => 'x-www-form-urlencoded',
            ],
        ]);

        return redirect('/perkebunan');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $this->client->delete($id);

        return redirect('/perkebunan');
    }
}
