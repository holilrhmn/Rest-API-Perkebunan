<template>
  <div>
    <!-- disini saya menggunakan bootstrap untuk design tabel nya. secara default bootstrap sudah di include di file welcome.blade.php jadi saya tidak perlu lagi untuk import file nya -->
    <div class="row">
      <div class="col-md-12">
        <br>
        <br>
        <div class="row">
          <div class="col-md-10">
            <h4>Perkebunan/Pertanian</h4>
          </div>
          <div class="col-md-2">
            <!-- push router ke form membuat data -->
            <router-link class="btn btn-primary w-100" to="/create">+ Tambah</router-link>
          </div>
        </div>
        <br>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Nama Pemilik</th>
              <th scope="col">Jenis Perkebunan</th>
              <th scope="col">Deskripsi</th>
               <th scope="col">Luas_lahan</th>
                <th scope="col">Waktu Tanam</th>
                 <th scope="col">Waktu Panen</th>
            </tr>
          </thead>
          <tbody>
            <!-- menampilkan data ke table -->
            <tr v-for="kebun in kebuns" :key="kebun.id">
              <td style="width:40%">{{kebun.Nama_Pemilik}}</td>
              <td style="width:40%">{{kebun.jenis_Perkebunan}}</td>
              <td style="width:40%">{{kebun.Deskripsi}}</td>
              <td style="width:40%">{{kebun.Luas_lahan}}</td>
              <td style="width:40%">{{kebun.Waktu_Tanam}}</td>
              <td style="width:40%">{{kebun.Waktu_panen}}</td>
              <td style="width:20%">
                <router-link class="btn btn-warning" :to="'/detail/'+kebun.id">Update</router-link>
                <button class="btn btn-danger" v-on:click="deleteData(kebun.id)">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<!-- script js -->
<script>
export default {
  data() {
    return {
      // variable array yang akan menampung hasil fetch dari api
      kebuns: []
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    loadData() {
      // fetch data dari api menggunakan axios
      axios.get("http://localhost:8000/api/perkebunan").then(response => {
        // mengirim data hasil fetch ke varibale array persons
        this.kebuns = response.data;
      });
    },
    deleteData(id) {
      // delete data
      axios.delete("http://localhost:8000/api/perkebunan/delete" + id).then(response => {
        this.loadData();
      });
    }
  }
};
</script>
