import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import ListadeProducts from "./components/ListadeProducts/ListadeProducts";
import Busqueda from "./components/Busqueda/Busqueda";
import Footer from "./components/Footer/Footer";

function App() {
  const [mostrarBusqueda, setMostrarBusqueda] = useState(false);

  return (
    <>
      <Navbar setMostrarBusqueda={setMostrarBusqueda} />

      {mostrarBusqueda ? (
        <Busqueda setMostrarBusqueda={setMostrarBusqueda} />
      ) : (
        <ListadeProducts />
      )}

      <Footer />
    </>
  );
}

export default App;