import React, {Component} from 'react';

import axios from 'axios';

import { Link } from 'react-router';

import TableRow from './TableRow';

import MyGlobleSetting from './MyGlobleSetting';

class DisplayProduct extends Component {

  constructor(props) {

       super(props);

       this.state = {kebunNamaPemilik: '', kebunJenisPerkebunan: '',kebunDeskripsi:'',kebunLuaslahan: '', kebunWaktuTanam: '', kebunWaktuPanen:'', };

     }

     componentDidMount(){

       axios.get(MyGlobleSetting.url + '/api/kebun')

       .then(response => {

         this.setState({ kebuns: response.data });

       })

       .catch(function (error) {

         console.log(error);

       })

     }

     tabRow(){

       if(this.state.kebuns instanceof Array){

         return this.state.kebuns.map(function(object, i){

             return ;

         })

       }

     }


  render(){

    return (

      <div>

        <h1>Kebuns</h1>


        <div className="row">

          <div className="col-md-10"></div>

          <div className="col-md-2">

            <Link to="/add-kebun">Tambah Perkebunan</Link>

          </div>

        </div><br />


        <table className="table table-hover">

            <thead>

            <tr>

                <td>ID</td>
                <td>Nama Pemilik</td>
                <td>Jenis Perkebunan</td>
                <td>Deskripsi</td>
                <td>Luas Lahan</td>
                <td>Waktu Tanam</td>
                <td>Waktu Panen</td>

                <td width="200px">Aksi</td>

            </tr>

            </thead>

            <tbody>

              {this.tabRow()}

            </tbody>

        </table>

    </div>

    )

  }

}

export default DisplayKebun;
