import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditSiswa() {
  const { kode } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nama: "",
    alamat: "",
    tanggal: "",
    jurusan: ""
  });

  useEffect(() => {
    axios
      .get(`http://localhost:3000/siswa/${kode}`)
      .then((response) => {
        setFormData({
          nama: response.data.nama || "",
          alamat: response.data.alamat || "",
          tanggal: response.data.tanggal
            ? response.data.tanggal.substring(0, 10)
            : "",
          jurusan: response.data.jurusan || ""
        });
      })
      .catch((error) => {
        console.error("Gagal mengambil data:", error);
      });
  }, [kode]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:3000/siswa/${kode}`, formData)
      .then(() => {
        alert("Data siswa berhasil diubah");
        navigate("/siswa");
      })
      .catch((error) => {
        console.error("Gagal mengubah data:", error);
        alert("Gagal mengubah data siswa");
      });
  };

  return (
    <div className="container mt-4">
      <div className="card p-4">
        <h2>Edit Data Siswa</h2>

        <p className="text-secondary">
          Silakan ubah data siswa di bawah ini.
        </p>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label className="form-label">Kode</label>
            <input
              type="text"
              className="form-control"
              value={kode}
              disabled
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Nama</label>
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
            <label className="form-label">Alamat</label>
            <input
              type="text"
              name="alamat"
              className="form-control"
              placeholder="Masukkan alamat"
              value={formData.alamat}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Tanggal</label>
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
            <label className="form-label">Jurusan</label>
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
            Simpan Perubahan
          </button>

        </form>
      </div>
    </div>
  );
}

export default EditSiswa;