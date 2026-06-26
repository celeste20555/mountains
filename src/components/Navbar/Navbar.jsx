import "./Navbar.css";
import Logo from "../../imagenes/Logo.jpeg";

import {
  FiSearch,
  FiShoppingCart,
  FiUser,
  FiMenu
} from "react-icons/fi";

function Navbar({setMostrarBusqueda}) {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <img src={Logo} alt="Logo" />
      </div>

      <div className="navbar-search">
        <FiSearch 
         onClick={() => setMostrarBusqueda(true)}
          style={{ cursor: "pointer" }} 
        />
        <input
           type="text"
           laceholder="Buscar productos..."
           onKeyDown={(e) => {
            if (e.key === "Enter") {
              setMostrarBusqueda(true);
            }
          }}
        />
      </div>

      <div className="navbar-icons">
        <FiShoppingCart />
        <FiUser />
        <FiMenu />
      </div>
    </header>
  );
}

export default Navbar;