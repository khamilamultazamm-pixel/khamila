import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Siswa from "./Pages/Siswa";
import TambahSiswa from "./Pages/TambahSiswa";
import EditSiswa from "./Pages/EditSiswa";
import Tentang from "./Pages/Tentang";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/siswa" element={<Siswa />} />

        <Route path="/tambah-siswa" element={<TambahSiswa />} />

        <Route path="/edit-siswa/:kode" element={<EditSiswa />} />

        <Route path="/tentang" element={<Tentang />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;