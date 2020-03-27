import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Swal from 'sweetalert2';

export default class KebunTableRow extends Component {
    constructor(props) {
        super(props);
        this.deleteKebun = this.deleteKebun.bind(this);
    }

    deleteKebun(e) {
        e.preventDefault();
        Swal.fire({
          title: "Apakah Kamu Yakin?",
          text: "Kamu Ingin Menghapus Data Ini?",
          icon: "warning",
          showCancelButton: true,
          cancelButtonColor: '#d33',
          dangerMode: true,
        })
        .then(willDelete => {
          if (willDelete) {
            axios.delete('http://localhost:8000/api/perkebunan/' + this.props.obj.id)
              .then(res => {
                Swal.fire({
                  title: "Done!",
                  text: "data Telah Dihapus",
                  icon: "success",
                  timer: 2000,
                  button: false
                })
            });
          }
        });
      }

    render() {
        return (
            <tr>
              <td>{this.props.obj.id}</td>
                <td>{this.props.obj.Nama_Pemilik}</td>
                <td>{this.props.obj.jenis_perkebunan}</td>
                <td>{this.props.obj.deskripsi}</td>
                <td>{this.props.obj.Luas_lahan}</td>
                <td>{this.props.obj.Waktu_Tanam}</td>
                <td>{this.props.obj.Waktu_panen}</td>
                <td>
                    <Link className="edit-link" to={"/edit-kebun/" + this.props.obj.id}>
                       <Button size="sm" variant="info">Edit</Button>
                    </Link>
                    <Button onClick={this.deleteKebun} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        );
    }
}