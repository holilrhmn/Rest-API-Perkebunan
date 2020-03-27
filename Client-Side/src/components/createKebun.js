import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios'
import ListKebun from './ListKebun';
import Swal from 'sweetalert2';


export default class CreateKebun extends Component {
      constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeNama_Pemilik = this.onChangeNama_Pemilik.bind(this);
    this.onChangejenis_perkebunan = this.onChangejenis_perkebunan.bind(this);
    this.onChangeDeskripsi = this.onChangeDeskripsi.bind(this);
    this.onChangeLuas_lahan = this.onChangeLuas_lahan.bind(this);
    this.onChangeWaktu_Tanam = this.onChangeWaktu_Tanam.bind(this);
    this.onChangeWaktu_panen = this.onChangeWaktu_panen.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      Nama_Pemilik: '',
      jenis_perkebunan: '',
      Deskripsi: '',
      Luas_lahan: '',
      Waktu_Tanam: '',
      Waktu_panen: ''
    }
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
     const kebun = {
      Nama_Pemilik: this.state.Nama_Pemilik,
      jenis_perkebunan: this.state.jenis_perkebunan,
      Deskripsi: this.state.Deskripsi,
      Luas_lahan : this.state.Luas_lahan,
      Waktu_Tanam : this.state.Waktu_Tanam,
      Waktu_panen : this.state.Waktu_panen,
    };
    axios.post('http://localhost:8000/api/perkebunan', kebun)
      .then(res => console.log(res.data));
    // console.log(`Expense successfully created!`);
    // console.log(`Name: ${this.state.name}`);
    // console.log(`Amount: ${this.state.amount}`);
    // console.log(`Description: ${this.state.description}`);
    Swal.fire(
  'Good job!',
  'Data Kebun Added Successfully',
  'success'
  )

    this.setState({Nama_Pemilik: '', jenis_perkebunan: '', Deskripsi: '', Luas_lahan: '', Waktu_Tanam: '', Waktu_panen: ''})
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Row> 
            <Col>
             <Form.Group controlId="Nama_Pemilik">
                <Form.Label>Nama Pemilik</Form.Label>
                <Form.Control type="text" value={this.state.Nama_Pemilik} onChange={this.onChangeNama_Pemilik}/>
             </Form.Group>
            
            </Col>
            
            <Col>
             <Form.Group controlId="jenis_perkebunan">
                <Form.Label>Jenis Perkebunan</Form.Label>
                        <Form.Control type="text" value={this.state.jenis_perkebunan} onChange={this.onChangejenis_perkebunan}/>
             </Form.Group>
            </Col>  
           
        </Row>
            

        <Form.Group controlId="Deskripsi">
          <Form.Label>Deskripsi</Form.Label>
                <Form.Control as="textarea" type="textarea" value={this.state.Deskripsi} onChange={this.onChangeDeskripsi}/>
        </Form.Group>

        <Form.Group controlId="Luas_lahan">
          <Form.Label>Luas Lahan</Form.Label>
                <Form.Control type="text" value={this.state.Luas_lahan} onChange={this.onChangeLuas_lahan}/>
        </Form.Group>

        <Form.Group controlId="Waktu_Tanam">
          <Form.Label>Waktu Tanam</Form.Label>
                <Form.Control type="date" value={this.state.Waktu_Tanam} onChange={this.onChangeWaktu_Tanam}/>
        </Form.Group>

        <Form.Group controlId="Waktu_panen">
          <Form.Label>Waktu Panen</Form.Label>
                <Form.Control type="date" value={this.state.Waktu_panen} onChange={this.onChangeWaktu_panen}/>
        </Form.Group>

       
        <Button variant="primary" size="lg" block="block" type="submit">
          Tambah Kebun
        </Button>
      </Form>
      <br></br>
      <br></br>

      <ListKebun> </ListKebun>
    </div>);
  }
}

