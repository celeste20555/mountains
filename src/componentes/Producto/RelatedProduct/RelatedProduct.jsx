import "./RelatedProduct.css";

import ProductCard from "../../ProductCard/ProductCard";

import Campera from "../../../imagenes/Campera.png";
import Bolsegos from "../../../imagenes/Bolsegos.png";
import Gorra from "../../../imagenes/Gorra.png";
import React, { useState } from "react";

function RelatedProduct() {
  const [inicio, setInicio] = useState(0);

  const productos = [
    {
      imagen: Campera,
      nombre: "Campera térmica",
      precio: "$35.000",
    },
    {
      imagen: Gorra,
      nombre: "Gorro térmico",
      precio: "$10.000",
    },
    {
      imagen: Bolsegos,
      nombre: "Bolsegos",
      precio: "$33.000",
    },
    {
      imagen: Bolsegos,
      nombre: "Bolsegos",
      precio: "$33.000",
    },
    {
      imagen: Gorra,
      nombre: "Gorro térmico",
      precio: "$10.000",
    },
    {
      imagen: Campera,
      nombre: "Campera térmica",
      precio: "$35.000",
    },
  ];

  return (
    <section className="producto-related">

      <h2>Productos que le pueden interesar</h2>

      <div className="producto-related-container">

        <button className="producto-arrow"
          onClick={() => {
            if (inicio === 0) {
              setInicio(3);
            } else {
              setInicio(inicio - 3);
            }
          }}
        >
          &lt;
        </button>

        <div className="producto-related-grid">

          {productos.slice(inicio, inicio + 3).map((producto, index) => (
            <ProductCard
              key={index}
              imagen={producto.imagen}
              nombre={producto.nombre}
              precio={producto.precio}
            />
          ))}

        </div>

        <button className="producto-arrow"
          onClick={() => {
            if (inicio === 3) {
              setInicio(0);
            } else {
              setInicio(inicio + 3);
            }
          }}
        >
          &gt;
        </button>

      </div>

    </section>
  );
}

export default RelatedProduct;