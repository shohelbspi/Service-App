import { Link, useLocation } from "react-router-dom";
import { Nav } from "react-bootstrap";

function Navbar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <Nav className="flex-column p-3" variant="pills">
      <Nav.Item className="mb-4">
        <h3 className="text-white px-3">ServiceApp</h3>
      </Nav.Item>
      <Nav.Item className="mb-2">
        <Link to="/" className={`nav-link ${isActive("/") || isActive("/index")}`}>
          Services
        </Link>
      </Nav.Item>
     
    </Nav>
  );
}

export default Navbar;
