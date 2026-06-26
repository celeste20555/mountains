import "./ListadeProducts.css";

import RelatedProducts from "../RelatedProducts/RelatedProducts";

function ListadeProducts() {
  return (
    <>
      <div className="ofertas">
        <span class="material-symbols-outlined">sell</span>
        <h2>Nuestros productos imperdibles al</h2>
        <h3>50% OFF</h3>
      </div>

      <section className="filtros">
        <button className="categoria">
          TODAS LAS CATEGORÍAS
        </button>

        <div className="derecha">
          <select>
            <option>Mas vendidos</option>
            <option>Mayor precio</option>
            <option>Menor precio</option>
          </select>

          <select>
            <option>Todas las categorías</option>
            <option>Equipamiento para dormir</option>
            <option>Ropa y protección</option>
            <option>Iluminación y energía</option>
          </select>
        </div>
      </section>

      <RelatedProducts />
    </>
  );
}

export default ListadeProducts;