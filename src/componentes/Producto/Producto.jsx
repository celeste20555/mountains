import "./Producto.css";

import ProductGallery from "./ProductGallery/ProductGallery";
import ProductInfo from "./ProductInfo/ProductInfo";
import Reviews from "./Reviews/Reviews";
import HomeProducts from "../HomeProducts/HomeProducts";

function Producto({
  carrito,
  setCarrito,
  producto,
  setMostrarProducto,
}) {
  return (
    <main className="producto">
      <div className="producto-top">
        <ProductGallery producto={producto} />

        <ProductInfo
          carrito={carrito}
          setCarrito={setCarrito}
          producto={producto}
        />
      </div>

      <Reviews />

      <HomeProducts
        setMostrarProducto={setMostrarProducto}
      />
    </main>
  );
}

export default Producto;
