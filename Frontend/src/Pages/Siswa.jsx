import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Siswa() {
    const [dataSiswa, setDataSiswa] = useState([]);

    const getSiswa = () => {
        axios
            .get("http://localhost:3000/siswa")
            .then((response) => {
                setDataSiswa(response.data);
            })
            .catch((error) => {
                console.error("Gagal mengambil data siswa:", error);
            });
    };

    useEffect(() => {
        getSiswa();
    }, []);

    const handleDelete = (kode) => {
        const yakin = window.confirm("Yakin ingin menghapus data ini?");

        if (!yakin) {
            return;
        }

        axios
            .delete(`http://localhost:3000/siswa/${kode}`)
            .then(() => {
                window.alert("Data siswa berhasil dihapus");
                getSiswa();
            })
            .catch((error) => {
                console.error("Gagal menghapus data:", error);
                window.alert("Gagal menghapus data siswa");
            });
    };

    return (
        <div className="container mt-4">

            <div className="mb-4">
                <h1>Data Siswa</h1>

                <p className="text-secondary">
                    Daftar seluruh siswa
                </p>
            </div>

            <div className="text-end mb-3">
                <Link
                    to="/tambah-siswa"
                    className="btn btn-primary"
                >
                    + Tambah Data
                </Link>
            </div>

            <div className="table-responsive">
                <table className="table table-bordered table-hover align-middle">

                    <thead className="table-dark">
                        <tr>
                            <th>Kode</th>
                            <th>Nama</th>
                            <th>Alamat</th>
                            <th>Tanggal</th>
                            <th>Jurusan</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>

                    <tbody>
                        {dataSiswa.map((siswa) => (
                            <tr key={siswa.kode}>

                                <td>{siswa.kode}</td>
                                <td>{siswa.nama}</td>
                                <td>{siswa.alamat}</td>
                                <td>
                                    {new Date(siswa.tanggal).toLocaleDateString("id-ID")}
                                </td>
                                <td>{siswa.jurusan}</td>

                                <td className="text-center">

                                    <Link
                                        to={`/edit-siswa/${siswa.kode}`}
                                        className="btn btn-warning btn-sm me-2"
                                        title="Edit"
                                    >
                                        ✏️ Edit
                                    </Link>

                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => handleDelete(siswa.kode)}
                                        title="Hapus"
                                    >
                                        🗑️ Hapus
                                    </button>

                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>

        </div>
    );
}

export default Siswa;