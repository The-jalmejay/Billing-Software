import { NavLink } from "react-router-dom";
import "../styles/Sidebar.css";
function Sidebar({ isOpen }) {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "side-link active" : "side-link"
        }
      >
        Dashboard
      </NavLink>
      <NavLink
        to="/customers"
        className={({ isActive }) =>
          isActive ? "side-link active" : "side-link"
        }
      >
        Customers
      </NavLink>
      <NavLink
        to="/products"
        className={({ isActive }) =>
          isActive ? "side-link active" : "side-link"
        }
      >
        Products
      </NavLink>
      <NavLink
        to="/invoices"
        className={({ isActive }) =>
          isActive ? "side-link active" : "side-link"
        }
      >
        Invoices
      </NavLink>
      <NavLink
        to="/payments"
        className={({ isActive }) =>
          isActive ? "side-link active" : "side-link"
        }
      >
        Payments
      </NavLink>
    </div>
  );
}

export default Sidebar;
