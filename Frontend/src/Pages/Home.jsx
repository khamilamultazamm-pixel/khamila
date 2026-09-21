import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">

      {/* TEKS BERJALAN */}
      <div className="marquee">
        <p>
          📢 Selamat datang di Website Data Siswa — Silakan pilih menu
          untuk menambah atau melihat data siswa.
        </p>
      </div>

      {/* HOME */}
      <div className="home-card">

        <h1>Selamat Datang</h1>

        <p className="lead">
          Website Data Siswa
        </p>

        <div className="mt-4">
          <Link to="/tambah-siswa" className="btn btn-primary me-2">
            Tambah Siswa
          </Link>

          <Link to="/siswa" className="btn btn-primary me-2">
            Lihat Data Siswa
          </Link>

          

          
        </div>

      </div>

    </div>
  );
}

export default Home;