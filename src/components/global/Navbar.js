import { Link } from "react-router-dom";
import "../../css/navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar-logo row">
          <Link to="/">Hasla-Løkkeberg</Link>
        </div>
        <div className="row">
          <ul className="navbar-menu">
            <li>
              <Link to="/om-oss">Om oss</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
