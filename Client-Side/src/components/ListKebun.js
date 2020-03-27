import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import KebunTableRow from './KebunTableRow';


export default class ListKebun extends Component {

  constructor(props) {
    super(props)
    this.state = {
      kebun: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8000/api/perkebunan/')
      .then(res => {
        this.setState({
          kebun: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.kebun.map((res, i) => {
      return <KebunTableRow obj={res} key={i} />;
    });
  }


  render() {
    return (<div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
          <th>ID</th>
            <th>Nama Pemilik</th>
            <th>Jenis Perkebunan</th>
            <th>Deskripsi</th>
            <th>Luas Lahan</th>
            <th>Waktu Tanam</th>
            <th>Waktu Panen</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}