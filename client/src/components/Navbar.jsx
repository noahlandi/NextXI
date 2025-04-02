import { Link } from 'react-router-dom';
import '../styles/navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">NextXI</Link>
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/players">Players</Link>
          <Link to="/hot-clips">Hot Clips</Link>
          <Link to="/recruiters">Recruiters</Link>
        </div>
      </div>
    </nav>
  );
}
