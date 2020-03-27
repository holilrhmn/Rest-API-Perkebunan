import React, {Component} from 'react';

import axios from 'axios';

import { Link } from 'react-router';

import MyGlobleSetting from './MyGlobleSetting';


class UpdateProduct extends Component {

  constructor(props) {

      super(props);

      this.state = {kebunNamaPemilik: '', kebunJenisPerkebunan: '',kebunDeskripsi:'',kebunLuaslahan: '', kebunWaktuTanam: '', kebunWaktuPanen:'', };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

  }



  componentDidMount(){

    axios.get(MyGlobleSetting.url + `/api/kebun/${this.props.params.id}/edit`)

    .then(response => {

      this.setState({ NamaPemilik: response.data.Nama_Pemilik, JenisPerkebunan: response.data.jenis_perkebunan, Deskripsi: response.data.Deskripsi, LuasLahan: response.data.Luas_lahan, WaktuTanam: response.data.Waktu_Tanam, WaktuPanen: response.data.Waktu_panen  });

    })

    .catch(function (error) {

      console.log(error);

    })

  }

  handleChange = (event) => {
    var name  = event.target.name
    var value = event.target.value
    this.setState({ [name] : value })

  }
  handleSubmit(event) {

    event.preventDefault();

    const kebuns = {

        NamaPemilik: this.state.Nama_Pemilik,
        JenisPerkebunan: this.state.jenis_perkebunan,
        Deskripsi: this.state.Deskripsi,
        LuasLahan: this.state.Luas_lahan,
        WaktuTanam: this.state.Waktu_Tanam,
        WaktuPanen: this.state.Waktu_Panen,

      }

    let uri = MyGlobleSetting.url + '/api/kebun/'+this.props.params.id;

    axios.patch(uri, products).then((response) => {

          this.props.history.push('/display-kebun');

    });

  }

  render(){

    return (

      <div>

        <h1>Update Kebun</h1>

        <div className="row">

          <div className="col-md-10"></div>

          <div className="col-md-2">

            <Link to="/display-kebun" className="btn btn-success">Kembali Ke Data Perkebunan</Link>

          </div>

        </div>

        <form onSubmit={this.handleSubmit}>

            <div className="form-group">

                <label>Nama Pemilik</label>

                <input type="text"

                  className="form-control"

                  value={this.state.Nama_Pemilik}

                  onChange={this.handleChange} />

            </div>

            <div className="form-group">

                <label>Jenis Perkebunan </label>

                <input type="text"

                  className="form-control"

                  value={this.state.jenis_perkebunan}

                  onChange={this.handleChange} />

            </div>


            <div className="form-group">

                <label name="product_body">Deskripsi</label>

                <textarea className="form-control"

                  onChange={this.handleChange1} value={this.state.Deskripsi}></textarea>

            </div>
            <div className="form-group">

                <label>Luas Lahan</label>

                <input type="text"

                  className="form-control"

                  value={this.state.Luas_lahan}

                  onChange={this.handleChange} />

            </div>

            <div className="form-group">

                <label>Waktu Tanam</label>

                <input type="date"

                  className="form-control"

                  value={this.state.Waktu_Tanam}

                  onChange={this.handleChange} />

            </div>

            <div className="form-group">

                <label>Waktu Panen</label>

                <input type="date"

                  className="form-control"

                  value={this.state.Waktu_panen}

                  onChange={this.handleChange} />

            </div>


            <div className="form-group">

                <button className="btn btn-primary">Update</button>

            </div>

        </form>

    </div>

    )

  }

}

export default UpdateKebun;
