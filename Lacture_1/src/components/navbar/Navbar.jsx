import Button from "../button/Button";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="simple-nav">
      <div className="container">
        <a className="brand" href="#">
          <span className="logo" aria-hidden="true">MS</span>
          <span className="brand-text">
            <span className="title">MicroSoft Company</span>
            <span className="subtitle">Enterprise</span>
          </span>
        </a>
        <input id="nav-toggle" className="nav-toggle" type="checkbox" aria-hidden="true" />
        <label htmlFor="nav-toggle" className="nav-toggle-label" aria-hidden="true">
          <span></span>
        </label>
        <nav className="nav">
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#connect">Connect</a></li>
            <li><a href="#footer">Footer</a></li>
          </ul>
          <div className="actions">
            <a href="/login"><Button label="Login" type="primary" /></a>
            <a href="/getting-stared"><Button label="Get Started" type="secondary" /></a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
