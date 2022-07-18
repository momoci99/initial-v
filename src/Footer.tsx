import "./assets/styles/Footer.scoped.css";
import { Link } from "react-scroll";

function Footer() {
  return (
    <footer className="footer">
      <span className="footer--title">
        <a href="/initial-v">INITIAL V</a>
      </span>
      <div className="footer__gnb-wrapper">
        <Link to="Hero" smooth={true} className="gnb-wrapper__button">
          Home
        </Link>
        <Link to="Gallery" smooth={true} className="gnb-wrapper__button">
          Gallery
        </Link>
        <Link to="Rule" smooth={true} className="gnb-wrapper__button">
          Rule
        </Link>
        <Link to="Aboutus" smooth={true} className="gnb-wrapper__button">
          About us
        </Link>
      </div>
      <span className="footer--copy">© InItial V</span>
    </footer>
  );
}

export default Footer;
