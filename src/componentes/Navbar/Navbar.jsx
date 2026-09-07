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
  setMostrarProducto,
  setCarritoAbierto,
  textoBusqueda,
  setTextoBusqueda,
}) {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const buscar = (e) => {
    if (e.key === "Enter") {
      setMostrarBusqueda(true);
      setMostrarProductos(false);
      setMostrarProducto(false);
    }
  };
  const volverAlHome = () => {
    setMostrarBusqueda(false);
    setMostrarProductos(false);
    setMostrarProducto(false);
    setTextoBusqueda("");
    setMenuAbierto(false);
    setCarritoAbierto(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <header className="navbar">
        <div className="navbar-logo">
          <img
            src={logo}
            alt="Logo"
            onClick={volverAlHome}
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
          <FiShoppingCart
            onClick={() => setCarritoAbierto(true)}
          />

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
            <li onClick={volverAlHome}>
              Inicio
            </li>

            <li
              onClick={() => {
                setMostrarBusqueda(false);
                setMostrarProducto(false);
                setMostrarProductos(true);
                setMenuAbierto(false);

                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              Productos
            </li>

            <li
              onClick={() => {
                volverAlHome();

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