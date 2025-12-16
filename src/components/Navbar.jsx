import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "../styles/Navbar.css";
function Navbar({ toggleSidebar }) {
  return (
    <div className="navbar">
      <button className="menu-btn" onClick={toggleSidebar}>
        <FaBars />
      </button>

      <div className="nav-links">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/customers"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Customers
        </NavLink>

        
        <NavLink
          to="/invoices"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Invoices
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
