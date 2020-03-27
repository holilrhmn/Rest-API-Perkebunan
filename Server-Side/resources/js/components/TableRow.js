import React, { Component } from 'react';

import { Link, browserHistory } from 'react-router';

import MyGlobleSetting from './MyGlobleSetting';


class TableRow extends Component {

  constructor(props) {

      super(props);

      this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(event) {

    event.preventDefault();

    let uri = MyGlobleSetting.url + `/api/kebun/${this.props.obj.id}`;

    axios.delete(uri);

      browserHistory.push('/display-kebun');

  }

  render() {

    return (

        <tr>

          <td>

            {this.props.obj.id}

          </td>

          <td>

            {this.props.obj.Nama_Pemilik}

          </td>

          <td>

            {this.props.obj.jenis_perkebunan}

          </td>
          <td>

            {this.props.obj.Deskripsi}

          </td>
          <td>

            {this.props.obj.Luas_lahan}

          </td>

          <td>

            {this.props.obj.Waktu_Tanam}

          </td>

          <td>

            {this.props.obj.Waktu_panen}

          </td>


          <td>

          <form onSubmit={this.handleSubmit}>

            <Link to={"edit/"+this.props.obj.id} className="btn btn-primary">Edit</Link>

           <input type="submit" value="Delete" className="btn btn-danger"/>

         </form>

          </td>

        </tr>

    );

  }

}


export default TableRow;
