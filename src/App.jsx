import { useState } from "react";

import "./App.css";

import Navbar from "./componentes/Navbar/Navbar";
import Hero from "./componentes/Hero/Hero";
import Categories from "./componentes/Categories/Categories";
import HomeProducts from "./componentes/HomeProducts/HomeProducts";
import ListadeProducts from "./componentes/ListadeProducts/ListadeProducts";
import Footer from "./componentes/Footer/Footer";
import Busqueda from "./componentes/Busqueda/Busqueda";
import Producto from "./componentes/Producto/Producto";
import Carrito from "./componentes/Carrito/Carrito";

function App() {
  const [mostrarBusqueda, setMostrarBusqueda] = useState(false);
  const [mostrarProductos, setMostrarProductos] = useState(false);
  const [mostrarProducto, setMostrarProducto] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] =
    useState(null);
  const [carritoAbierto, setCarritoAbierto] = useState(false);
  const [carrito, setCarrito] = useState([]);
  const [textoBusqueda, setTextoBusqueda] = useState("");

  const [categoriaSeleccionada, setCategoriaSeleccionada] =
    useState("Todas las categorías");

  const irACategoria = (categoria) => {
    setCategoriaSeleccionada(categoria);
    setMostrarProductos(true);
    setMostrarProducto(false);
    setMostrarBusqueda(false);
  };

  const abrirProducto = (producto) => {
    setProductoSeleccionado(producto);
    setMostrarProducto(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Navbar
        setMostrarBusqueda={setMostrarBusqueda}
        setMostrarProductos={setMostrarProductos}
        setMostrarProducto={setMostrarProducto}
        setCarritoAbierto={setCarritoAbierto}
        textoBusqueda={textoBusqueda}
        setTextoBusqueda={setTextoBusqueda}
      />

      {mostrarBusqueda ? (
        <>
          <Busqueda
            textoBusqueda={textoBusqueda}
            setMostrarBusqueda={setMostrarBusqueda}
            setMostrarProducto={abrirProducto}
          />

          <Footer />
        </>
      ) : mostrarProducto && productoSeleccionado ? (
        <>
          <Producto
            carrito={carrito}
            setCarrito={setCarrito}
            producto={productoSeleccionado}
          />

          <Footer />
        </>
      ) : mostrarProductos ? (
        <>
          <ListadeProducts
            setMostrarProducto={abrirProducto}
            categoriaSeleccionada={categoriaSeleccionada}
            setCategoriaSeleccionada={
              setCategoriaSeleccionada
            }
          />

          <Footer />
        </>
      ) : (
        <>
          <Hero />

          <Categories
            irACategoria={irACategoria}
          />

          <HomeProducts
            setMostrarProducto={abrirProducto}
          />

          <Footer />
        </>
      )}

      {carritoAbierto && (
        <Carrito
          setCarritoAbierto={setCarritoAbierto}
          carrito={carrito}
          setCarrito={setCarrito}
        />
      )}
    </>
  );
}

export default App;