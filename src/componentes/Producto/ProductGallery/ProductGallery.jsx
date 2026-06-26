import "./ProductGallery.css";

import carpaVerde from "../../../imagenes/carpa_verde.png";
import carpaAzul from "../../../imagenes/carpa_azul.png";
import carpaRoja from "../../../imagenes/carpa_roja.png";

function ProductGallery() {
  return (
    <section className="gallery">

      <div className="main-image">
        <img
          src={carpaVerde}
          alt="Carpa Verde"
        />
      </div>

      <div className="gallery-bottom">

        <button className="arrow">
          &lt;
        </button>

        <div className="mini-images">

          <img
            src={carpaVerde}
            alt="Carpa Verde"
          />

          <img
            src={carpaAzul}
            alt="Carpa Azul"
          />

          <img
            src={carpaRoja}
            alt="Carpa Roja"
          />

        </div>

        <button className="arrow">
          &gt;
        </button>

      </div>

    </section>
  );
}

export default ProductGallery;