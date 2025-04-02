import { Link } from 'react-router-dom'
import '../styles/home.css'

export default function Home() {
  return (
    <div className="home-container">
        
      <h1 className="home-title">Welcome to <span>NextXI</span> ⚽</h1>
      <p className="home-subtitle">
        Discover talented footballers. Share your highlights. Get recruited.
      </p>
      <div className="home-panels">
        <Link to="/players" className="home-panel">
          <h2>Browse Players</h2>
        </Link>
        <Link to="/profile/10" className="home-panel">
          <h2>My Profile</h2>
        </Link>
      </div>
    </div>
  )
}
