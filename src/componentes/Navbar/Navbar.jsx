import "./Navbar.css";
import logo from "../../imagenes/logo.png";
import Carpita from "../../imagenes/Carpita.svg"
import { useState } from "react";

import { categorias } from "../RelatedProducts/RelatedProducts";

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
  const [mostrarSugerencias, setMostrarSugerencias] = useState(true);

  const productos = categorias.flatMap((categoria) =>
    categoria.productos
  );

  const sugerencias = productos
    .filter((producto) =>
      producto.nombre
        .toLowerCase()
        .includes(textoBusqueda.toLowerCase())
    )
    .slice(0, 5);

  const buscar = (e) => {
    if (e.key === "Enter") {
      setMostrarSugerencias(false);
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

        <div className={`navbar-search ${mostrarSugerencias &&
          textoBusqueda.trim() !== "" &&
          sugerencias.length > 0
          ? "con-sugerencias"
          : ""
          }`}>
          <FiSearch />

          <input
            type="text"
            placeholder="Buscar productos..."
            value={textoBusqueda}
            onChange={(e) => {
              setTextoBusqueda(e.target.value);
              setMostrarSugerencias(true);
            }}
          />

          {mostrarSugerencias &&
            textoBusqueda.trim() !== "" &&
            sugerencias.length > 0 && (
              <div className="sugerencias">
                {sugerencias.map((producto, index) => (
                  <div
                    className="sugerencia"
                    key={index}
                    onClick={() => {
                      setTextoBusqueda(producto.nombre);
                      setMostrarSugerencias(false);
                      setMostrarBusqueda(true);
                      setMostrarProductos(false);
                      setMostrarProducto(false);
                    }}
                  >
                    <img src={Carpita} alt={producto.nombre} />
                    <span>{producto.nombre}</span>
                  </div>
                ))}
              </div>
            )}

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