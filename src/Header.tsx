import "./assets/styles/Header.css";

function Header() {
  return (
    <nav className="Header">
      <span className="Title">
        <a href="/">INITIAL V</a>
      </span>
      <div className="GnbWrapper">
        <button className="Gnb">Home</button>
        <button className="Gnb">Rule</button>
        <button className="Gnb">Gallery</button>
        <button className="Gnb">About Us</button>
      </div>
    </nav>
  );
}

export default Header;
