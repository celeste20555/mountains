import { useState } from "react";
import "./ProductGallery.css";

import carpaVerde from "../../../imagenes/carpa_verde.png";
import carpaAzul from "../../../imagenes/carpa_azul.png";
import carpaRoja from "../../../imagenes/carpa_roja.png";

function ProductGallery() {
  const [imagenActual, setImagenActual] = useState(carpaVerde);
  const [indice, setIndice] = useState(0);

  const imagenes = [
    carpaVerde,
    carpaAzul,
    carpaRoja,
  ];

  return (
    <section className="product-gallery">

      <div className="product-main-image">
        <img
          src={imagenActual}
          alt="imagen de la carpa"
        />
      </div>

      <div className="product-gallery-carousel">

        <button className="product-gallery-arrow product-gallery-left"
          onClick={() => {
            if (indice === 0) {
              setIndice(imagenes.length - 1);
              setImagenActual(imagenes[imagenes.length - 1]);
            } else {
              setIndice(indice - 1);
              setImagenActual(imagenes[indice - 1]);
            }
          }}
        >
          &#8249;
        </button>

        <div className="product-gallery-images">

          <img
            src={carpaVerde}
            alt="Carpa Verde"
            onClick={() => setImagenActual(carpaVerde)}
          />

          <img
            src={carpaAzul}
            alt="Carpa Azul"
            onClick={() => {
              setImagenActual(carpaAzul);
              setIndice(1);
            }}
          />

          <img
            src={carpaRoja}
            alt="Carpa Roja"
            onClick={() => setImagenActual(carpaRoja)}
          />

        </div>

        <button className="product-gallery-arrow product-gallery-right"
          onClick={() => {
            if (indice === imagenes.length - 1) {
              setIndice(0);
              setImagenActual(imagenes[0]);
            } else {
              setIndice(indice + 1);
              setImagenActual(imagenes[indice + 1]);
            }
          }}
        >
          &#8250;
        </button>

      </div>

    </section>
  );
}

export default ProductGallery;