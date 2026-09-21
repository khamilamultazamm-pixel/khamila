import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function TambahSiswa() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    kode: "",
    nama: "",
    alamat: "",
    tanggal: "",
    jurusan: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/siswa", formData)
      .then(() => {
        alert("Data siswa berhasil ditambahkan");
        navigate("/siswa");
      })
      .catch((error) => {
        console.error("Gagal menambahkan data:", error);
        alert("Gagal menambahkan data siswa");
      });
  };

  return (
    <div className="container mt-4">
      <div className="form-card">

        <h1>Tambah Data Siswa</h1>

        <p className="text-secondary mb-4">
          Silakan isi data siswa di bawah ini.
        </p>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label className="form-label">Kode Siswa</label>
            <input
              type="text"
              name="kode"
              className="form-control"
              placeholder="Contoh: 001"
              value={formData.kode}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Nama Siswa</label>
            <input
              type="text"
              name="nama"
              className="form-control"
              placeholder="Masukkan nama siswa"
              value={formData.nama}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Alamat Siswa</label>
            <input
              type="text"
              name="alamat"
              className="form-control"
              placeholder="Masukkan alamat siswa"
              value={formData.alamat}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Tanggal lahir Siswa</label>
            <input
              type="date"
              name="tanggal"
              className="form-control"
              value={formData.tanggal}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Jurusan Siswa</label>
            <input
              type="text"
              name="jurusan"
              className="form-control"
              placeholder="Masukkan jurusan"
              value={formData.jurusan}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            💾 Simpan
          </button>

        </form>

      </div>
    </div>
  );
}

export default TambahSiswa;