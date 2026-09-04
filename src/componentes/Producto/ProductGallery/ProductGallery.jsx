import "./ProductGallery.css";

import carpaVerde from "../../../imagenes/carpa_verde.png";
import carpaAzul from "../../../imagenes/carpa_azul.png";
import carpaRoja from "../../../imagenes/carpa_roja.png";

function ProductGallery() {
  return (
    <section className="product-gallery">

      <div className="product-main-image">
        <img
          src={carpaVerde}
          alt="Carpa Verde"
        />
      </div>

      <div className="product-gallery-carousel">

        <button className="product-gallery-arrow product-gallery-left">
          &#8249;
        </button>

        <div className="product-gallery-images">

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

        <button className="product-gallery-arrow product-gallery-right">
          &#8250;
        </button>

      </div>

    </section>
  );
}

export default ProductGallery;