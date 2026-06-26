import "./HomeProducts.css";
import ProductCard from "../ProductCard/ProductCard";

import producto1 from "../../imagenes/Campera.png";
import producto2 from "../../imagenes/Gorra.png";
import producto3 from "../../imagenes/Bolsegos.png";

function HomeProducts() {
  return (
    <section className="home-products-section">

      <div className="titulo-productos">
        <div className="linea"></div>

        <h2>Productos que le pueden interesar</h2>
      </div>

      <section className="home-products">

        <button className="flecha izquierda">
          &#8249;
        </button>

        <div className="productos-contenedor">
          <ProductCard
            imagen={producto1}
            nombre="Campera térmica"
            precio="$35.000"
          />

          <ProductCard
            imagen={producto2}
            nombre="Gorro térmico"
            precio="$10.000"
          />

          <ProductCard
            imagen={producto3}
            nombre="Bolsegos"
            precio="$33.000"
          />
        </div>

        <button className="flecha derecha">
          &#8250;
        </button>

      </section>

    </section>
  );
}

export default HomeProducts;