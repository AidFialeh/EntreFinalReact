import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <Link to={"/"}>
        <h1> Adidas</h1>
      </Link>

      <nav>
        <ul>
          <li>
            <NavLink className="miBtn" to={`/categoria/2`}>
              <strong>Hombre</strong>
            </NavLink>
          </li>

          <li>
            <NavLink className="miBtn" to={`/categoria/3`}>
              <strong>Mujer</strong>
            </NavLink>
          </li>

          <li>
            <NavLink className="miBtn" to={`/categoria/4`}>
              <strong>Niños</strong>
            </NavLink>
          </li>
        </ul>
      </nav>

      <CartWidget />
    </header>
  );
};

export default NavBar;
