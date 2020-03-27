import React, {Component} from 'react';

import {browserHistory} from 'react-router';

import MyGlobleSetting from './MyGlobleSetting';


class CreateKebun extends Component {

  constructor(props){

    super(props);

    this.state = {kebunNamaPemilik: '', kebunJenisPerkebunan: '',kebunDeskripsi:'',kebunLuaslahan: '', kebunWaktuTanam: '', kebunWaktuPanen:'', };


    this.handleChange = this.handleChange.bind(this);


    this.handleSubmit = this.handleSubmit.bind(this);


  }

  handleChange = (event) => {
    var name  = event.target.name
    var value = event.target.value
    this.setState({ [name] : value })
}

  handleSubmit(e){

    e.preventDefault();

    const kebuns = {

      namaPemilik: this.state.kebunNamaPemilik,
      jenisPerkebunan: this.state.kebunJenisPerkebunan,
      Deskripsi: this.state.kebunDeskripsi,
      luasLahan: this.state.kebunLuaslahan,
      WaktuTanam: this.state.kebunWaktuTanam,
      WaktuPanen: this.state.kebunWaktuPanen,

    }

    let uri = MyGlobleSetting.url + '/api/kebun';

    axios.post(uri, kebun).then((response) => {

      browserHistory.push('/display-kebun');

    });

  }


    render() {

      return (

      <div>

        <h1>Tambah Kebun</h1>

        <form onSubmit={this.handleSubmit}>

          <div className="row">

            <div className="col-md-6">

              <div className="form-group">

                <label>Nama Pemilik:</label>

                <input type="text" className="form-control" onChange={this.handleChange} />

              </div>

            </div>

            </div>

            <div className="row">

              <div className="col-md-6">

                <div className="form-group">

                  <label>Jenis Perkebunan:</label>
                  <input type="text" className="form-control" onChange={this.handleChange} />


                </div>

              </div>

            </div>
            <div className="row">

              <div className="col-md-6">

                <div className="form-group">
                  <label>Deskripsi:</label>
                  <textarea className="form-control col-md-6" onChange={this.handleChange}></textarea>
                </div>

              </div>

            </div>
            <div className="row">

              <div className="col-md-6">

                <div className="form-group">
                  <label>Luas Lahan:</label>
                  <input type="text" className="form-control" onChange={this.handleChange} />
                </div>

              </div>

            </div>
            <div className="row">

              <div className="col-md-6">

                <div className="form-group">
                  <label>Waktu Tanam:</label>
                  <input type="date" className="form-control" onChange={this.handleChange} />
                </div>

              </div>

            </div>

            <div className="row">

              <div className="col-md-6">

                <div className="form-group">
                  <label>Waktu Panen:</label>
                  <input type="date" className="form-control" onChange={this.handleChange} />
                </div>

              </div>

            </div>

            <br />

            <div className="form-group">

              <button className="btn btn-primary">Tambah Perkebunan</button>

            </div>

        </form>

  </div>

      )

    }

}

export default CreateKebun;
