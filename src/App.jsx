import { useState } from "react";
import "./App.css";

import Navbar from "./componentes/Navbar/Navbar";
import Hero from "./componentes/Hero/Hero";
import Categories from "./componentes/Categories/Categories";
import HomeProducts from "./componentes/HomeProducts/HomeProducts";
import ListadeProducts from "./componentes/ListadeProducts/ListadeProducts";
import Footer from "./componentes/Footer/Footer";
import Busqueda from "./componentes/Busqueda/Busqueda";

function App() {

  const [mostrarBusqueda, setMostrarBusqueda] = useState(false);
  const [mostrarProductos, setMostrarProductos] = useState(false);
  const [textoBusqueda, setTextoBusqueda] = useState("");

  return (
    <>
      <Navbar
        setMostrarBusqueda={setMostrarBusqueda}
        setMostrarProductos={setMostrarProductos}
        textoBusqueda={textoBusqueda}
        setTextoBusqueda={setTextoBusqueda}
      />

      {mostrarBusqueda ? (

        <Busqueda
          textoBusqueda={textoBusqueda}
          setMostrarBusqueda={setMostrarBusqueda}
        />

      ) : mostrarProductos ? (

        <>
          <ListadeProducts />
          <Footer />
        </>

      ) : (

        <>
          <Hero />
          <Categories />
          <HomeProducts />
          <ListadeProducts />
          <Footer />
        </>

      )}
    </>
  );
}

export default App;