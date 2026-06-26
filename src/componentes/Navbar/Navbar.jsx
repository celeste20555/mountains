import "./Navbar.css";
import logo from "../../imagenes/logo.png";
import { useState } from "react";

import {
  FiSearch,
  FiShoppingCart,
  FiUser,
  FiMenu,
  FiX,
} from "react-icons/fi";

function Navbar({
  setMostrarBusqueda,
  setMostrarProductos,
  textoBusqueda,
  setTextoBusqueda,
}) {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const buscar = (e) => {
    if (e.key === "Enter") {
      setMostrarBusqueda(true);
      setMostrarProductos(false);
    }
  };

  return (
    <>
      <header className="navbar">
        <div className="navbar-logo">
          <img
            src={logo}
            alt="Logo"
            onClick={() => {
              setMostrarBusqueda(false);
              setMostrarProductos(false);
            }}
          />
        </div>

        <div className="navbar-search">
          <FiSearch />

          <input
            type="text"
            placeholder="Buscar productos..."
            value={textoBusqueda}
            onChange={(e) => setTextoBusqueda(e.target.value)}
            onKeyDown={buscar}
          />
        </div>

        <div className="navbar-icons">
          <FiShoppingCart />
          <FiUser />

          <FiMenu
            className="menu-icon"
            onClick={() => setMenuAbierto(true)}
          />
        </div>
      </header>

      {menuAbierto && (
        <div className="mobile-menu">
          <div className="mobile-header">
            <FiX onClick={() => setMenuAbierto(false)} />
          </div>

          <ul>
            <li
              onClick={() => {
                setMostrarBusqueda(false);
                setMostrarProductos(false);
                setMenuAbierto(false);
              }}
            >
              Inicio
            </li>

            <li
              onClick={() => {
                setMostrarBusqueda(false);
                setMostrarProductos(true);
                setMenuAbierto(false);
              }}
            >
              Productos
            </li>

            <li
              onClick={() => {
                setMostrarBusqueda(false);
                setMostrarProductos(false);
                setMenuAbierto(false);

                setTimeout(() => {
                  const footer = document.getElementById("contacto");

                  if (footer) {
                    footer.scrollIntoView({
                      behavior: "smooth",
                    });
                  }
                }, 100);
              }}
            >
              Contacto
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;