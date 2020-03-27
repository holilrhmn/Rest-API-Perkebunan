import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class editKebun extends Component {

  constructor(props) {
    super(props)

    this.onChangeNama_Pemilik = this.onChangeNama_Pemilik.bind(this);
    this.onChangejenis_perkebunan = this.onChangejenis_perkebunan.bind(this);
    this.onChangeDeskripsi = this.onChangeDeskripsi.bind(this);
    this.onChangeLuas_lahan = this.onChangeLuas_lahan.bind(this);
    this.onChangeWaktu_Tanam = this.onChangeWaktu_Tanam.bind(this);
    this.onChangeWaktu_panen = this.onChangeWaktu_panen.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
    

    // State
    this.state = {
        Nama_Pemilik: '',
        jenis_perkebunan: '',
        Deskripsi: '',
        Luas_lahan: '',
        Waktu_Tanam: '',
        Waktu_panen: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8000/api/perkebunan/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          Nama_Pemilik: res.data.Nama_Pemilik,
          jenis_perkebunan: res.data.jenis_perkebunan,
          Deskripsi: res.data.Deskripsi,
          Luas_lahan: res.data.Luas_lahan,
          Waktu_Tanam: res.data.Waktu_Tanam,
          Waktu_panen: res.data.Waktu_panen
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeNama_Pemilik(e) {
    this.setState({Nama_Pemilik: e.target.value})
  }

  onChangejenis_perkebunan(e) {
    this.setState({jenis_perkebunan: e.target.value})
  }

  onChangeDeskripsi(e) {
    this.setState({Deskripsi: e.target.value})
  }

  onChangeLuas_lahan(e) {
    this.setState({Luas_lahan: e.target.value})
  }

  onChangeWaktu_Tanam(e) {
    this.setState({Waktu_Tanam: e.target.value})
  }

  onChangeWaktu_panen(e) {
    this.setState({Waktu_panen: e.target.value})
  }

  onSubmit(e) {
    e.preventDefault()

    const kebunObject = {
        Nama_Pemilik: this.state.Nama_Pemilik,
        jenis_perkebunan: this.state.jenis_perkebunan,
        Deskripsi: this.state.Deskripsi,
        Luas_lahan : this.state.Luas_lahan,
        Waktu_Tanam : this.state.Waktu_Tanam,
        Waktu_panen : this.state.Waktu_panen
    };

    axios.put('http://localhost:8000/api/perkebunan/' + this.props.match.params.id, kebunObject)
      .then((res) => {
        console.log(res.data)
        console.log('Data Kebun Berhasil Diupdate')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to Expense List 
    this.props.history.push('/list-kebun')
  }


  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Nama_Pemilik">
          <Form.Label>Nama Pemilik</Form.Label>
          <Form.Control type="text" value={this.state.Nama_Pemilik} onChange={this.onChangeNama_Pemilik} />
        </Form.Group>

        <Form.Group controlId="jenis_perkebunan">
          <Form.Label>Jenis Perkebunan</Form.Label>
          <Form.Control type="text" value={this.state.jenis_perkebunan} onChange={this.onChangejenis_perkebunan} />
        </Form.Group>

        <Form.Group controlId="Deskripsi">
          <Form.Label>Deskripsi</Form.Label>
          <Form.Control type="text-area" value={this.state.Deskripsi} onChange={this.onChangeDeskripsi} />
        </Form.Group>

        <Form.Group controlId="Luas_lahan">
          <Form.Label>Luas Lahan (m2)</Form.Label>
          <Form.Control type="text" value={this.state.Luas_lahan} onChange={this.onChangeLuas_lahan} />
        </Form.Group>

        <Form.Group controlId="Waktu_Tanam">
          <Form.Label>Waktu Tanam</Form.Label>
          <Form.Control type="date" value={this.state.Waktu_Tanam} onChange={this.onChangeWaktu_Tanam} />
        </Form.Group>

        <Form.Group controlId="Waktu_panen">
          <Form.Label>Waktu Panen</Form.Label>
          <Form.Control type="date" value={this.state.Waktu_panen} onChange={this.onChangeWaktu_panen} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Update Perkebunan
        </Button>
      </Form>
    </div>
    );
  }
}