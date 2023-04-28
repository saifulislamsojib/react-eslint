import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/react.svg";

const links = [
  {
    path: "/",
    text: "Home",
  },
  {
    path: "/about",
    text: "About",
  },
];

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 10,
      }}
    >
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <ul
        style={{
          display: "flex",
          alignItems: "center",
          listStyle: "none",
        }}
      >
        {links.map(({ path, text }) => (
          <li
            key={path}
            style={{
              margin: "0 5px",
            }}
          >
            <NavLink
              to={path}
              className={({ isActive }) => (isActive ? "active" : undefined)}
              end
            >
              {text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
