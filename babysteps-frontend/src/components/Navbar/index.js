import { Link } from "react-router-dom";
import "./index.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Baby Steps</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/appointment">Book Appointment</Link>
        <Link to="/appointments-list">Appointments List</Link>
      </div>
    </nav>
  );
};

export default Navbar;
