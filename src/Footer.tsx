import "./assets/styles/Footer.scoped.css";

function Footer() {
  return (
    <footer className="footer">
      <span className="footer--title">
        <a href="/">INITIAL V</a>
      </span>
      <div className="footer__gnb-wrapper">
        <button className="gnb-wrapper__button">Home</button>
        <button className="gnb-wrapper__button">Rule</button>
        <button className="gnb-wrapper__button">Gallery</button>
        <button className="gnb-wrapper__button">About Us</button>
      </div>
      <span className="footer--copy">© InItial V</span>
    </footer>
  );
}

export default Footer;
