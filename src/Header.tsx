import "./assets/styles/Header.scoped.css";
import { Link } from "react-scroll";

function Header() {
  return (
    <nav className="Header">
      <span className="Title">
        <a href="/initial-v">INITIAL V</a>
      </span>
      <div className="GnbWrapper">
        <Link to="Hero" smooth={true} className="Gnb">
          Home
        </Link>
        <Link to="Gallery" smooth={true} className="Gnb">
          Gallery
        </Link>
        <Link to="Rule" smooth={true} className="Gnb">
          Rule
        </Link>
        <Link to="Aboutus" smooth={true} className="Gnb">
          About us
        </Link>
      </div>
    </nav>
  );
}

export default Header;
