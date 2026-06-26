import "./RelatedProduct.css";

import ProductCard from "../../ProductCard/ProductCard";

import Campera from "../../../imagenes/Campera.png";
import Bolsegos from "../../../imagenes/Bolsegos.png";
import Gorra from "../../../imagenes/Gorra.png";

function RelatedProduct() {
  return (
    <section className="producto-related">

      <h2>Productos que le pueden interesar</h2>

      <div className="producto-related-container">

        <button className="producto-arrow">
          &lt;
        </button>

        <div className="producto-related-grid">

          <ProductCard
            imagen={Campera}
            nombre="Campera térmica"
            precio="$30.000"
          />

          <ProductCard
            imagen={Bolsegos}
            nombre="Bolsegos abrigados"
            precio="$30.000"
          />

          <ProductCard
            imagen={Gorra}
            nombre="Gorra negra"
            precio="$30.000"
          />

        </div>

        <button className="producto-arrow">
          &gt;
        </button>

      </div>

    </section>
  );
}

export default RelatedProduct;