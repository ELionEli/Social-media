import "./navbar.css";

export const Navbar = () => {
  return (
    <nav>
      <div className="nav-content">
        <a href="home.html" className="logo">
          Social
        </a>
        <input type="text" className="search-bar" placeholder="Search" />
        <div className="nav-buttons">
          <a href="">
            <button className="nav-btn">Log In</button>
          </a>
          <a href="">
            <button className="nav-btn primary">Sign Up</button>
          </a>
        </div>
      </div>
    </nav>
  );
};
