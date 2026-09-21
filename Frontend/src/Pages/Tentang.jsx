function Tentang() {
    return(
        <div className="home-container">
            <div className="home-card tentang-card">

                <h1>Tentang Data Siswa</h1>

                <p className="text-secondary mb-4">
                    Data siswa adalah website sederhana untuk mengelola data Siswa
                </p>

                <h3>Fitur Website</h3>

                <ul>
                    <li>Melihat data mahasiswa</li>
                    <li>Menambahkan data mahasiswa</li>
                    <li>Mengubah data mahasiswa</li>
                    <li>Menghapus data mahasiswa</li>
                </ul>

                <h3 className="mt-4">Pembuat Website</h3>

                <p>
                    <strong>Nama:</strong> Khamila Multazam

                </p>

                <p>
                    <strong>Program :</strong>Pengembangan Web dengan Node.js dan React
                </p>

                <h3 className="mt-4">Teknologi yang digunakan</h3>

                <ul>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>Prisma ORM</li>
                    <li>MySQL</li>
                    <li>React.js</li>
                    <li>Vite</li>
                    <li>Axios</li>
                    <li>Bootstrap</li>
                </ul>
            </div>
        </div>
    );
}

export default Tentang;