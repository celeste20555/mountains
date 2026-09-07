import "./Producto.css";

import ProductGallery from "./ProductGallery/ProductGallery";
import ProductInfo from "./ProductInfo/ProductInfo";
import Reviews from "./Reviews/Reviews";
import RelatedProduct from "./RelatedProduct/RelatedProduct";

function Producto({ carrito, setCarrito }) {
  return (
    <main className="producto">

      <div className="producto-top">
        <ProductGallery />
        <ProductInfo
          carrito={carrito}
          setCarrito={setCarrito}
        />
      </div>

      <Reviews />

      <RelatedProduct />

    </main>
  );
}

export default Producto;