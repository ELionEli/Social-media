import "./navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <div className="nav-content">
        <Link to="/" className="logo">
          Social
        </Link>
        <input type="text" className="search-bar" placeholder="Search" />
        <div className="nav-buttons">
          <Link to="/signin">
            <button className="nav-btn">Log In</button>
          </Link>
          <Link to="/signup">
            <button className="nav-btn primary">Sign Up</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
