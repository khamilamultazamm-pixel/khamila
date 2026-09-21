import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      
      <Link className="navbar-brand" to="/">
        Data Siswa
      </Link>

      <div>
        <Link className="text-white text-decoration-none me-3" to="/">
          Home
        </Link>

        <Link className="text-white text-decoration-none" to="/tentang">
          Tentang
        </Link>
      </div>

    </nav>
  );
}

export default Navbar;