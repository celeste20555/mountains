import { useState } from "react";
import "./HomeProducts.css";
import ProductCard from "../ProductCard/ProductCard";

import producto1 from "../../imagenes/Campera.png";
import producto2 from "../../imagenes/Gorra.png";
import producto3 from "../../imagenes/Bolsegos.png";

function HomeProducts({ setMostrarProducto }) {
  const [inicio, setInicio] = useState(0);

  const productos = [
    {
      imagen: producto1,
      nombre: "Campera térmica",
      precio: "$35.000",
    },
    {
      imagen: producto2,
      nombre: "Gorro térmico",
      precio: "$10.000",
    },
    {
      imagen: producto3,
      nombre: "Bolsegos",
      precio: "$33.000",
    },
    {
      imagen: producto3,
      nombre: "Bolsegos",
      precio: "$33.000",
    },
    {
      imagen: producto2,
      nombre: "Gorro térmico",
      precio: "$10.000",
    },
    {
      imagen: producto1,
      nombre: "Campera térmica",
      precio: "$35.000",
    },
  ];

  return (
    <section className="home-products-section">

      <div className="titulo-productos">
        <div className="linea"></div>

        <h2>Productos que le pueden interesar</h2>
      </div>

      <section className="home-products">

        <button className="flecha izquierda"
          onClick={() => {
            if (inicio === 0) {
              setInicio(3);
            } else {
              setInicio(inicio - 3);
            }
          }}
        >
          &#8249;
        </button>

        <div className="productos-contenedor">

          {productos.slice(inicio, inicio + 3).map((producto, index) =>
            <ProductCard
              key={index}
              imagen={producto.imagen}
              nombre={producto.nombre}
              precio={producto.precio}
              setMostrarProducto={setMostrarProducto}
            />
          )}

        </div>

        <button className="flecha derecha"
          onClick={() => {
            if (inicio === 3) {
              setInicio(0);
            } else {
              setInicio(inicio + 3);
            }
          }}
        >
          &#8250;
        </button>

      </section>

    </section>
  );
}

export default HomeProducts;