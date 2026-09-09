import { useState } from "react";
import Carpa from "../../../imagenes/carpa_verde.png";
import "./ProductInfo.css";
function ProductInfo({ carrito, setCarrito }) {
  const [cantidad, setCantidad] = useState(1);
  const [colorSeleccionado, setColorSeleccionado] = useState("");
  const producto = {
    imagen: Carpa,
    nombre: "Carpa Explorer 2p",
    precio: 30000,
    cantidad
  };
  const agregarCarrito = () => {
    const productoEncontrado = carrito.find(
      (item) => item.nombre === producto.nombre
    );
    if (productoEncontrado) {
      setCarrito(
        carrito.map((item) =>
          item.nombre === producto.nombre
            ? {
                ...item,
                cantidad: item.cantidad + producto.cantidad
              }
            : item
        )
      );
    } else {
      setCarrito([...carrito, producto]);
    }
  };
  return (
    <section className="product-info">
      <h1>{producto.nombre}</h1>
      <h2>${producto.precio}</h2>
      <p>
        Un set matero y de camping completo reúne los elementos
        esenciales para disfrutar al aire libre. Incluye termo y mate,
        platos, cubiertos, ollas y loncheras, ofreciendo practicidad y
        comodidad para viajes, picnics y campamentos.
      </p>
      <h4>Colores disponibles:</h4>
      <div className="colors">
        <span
          className={`color beige ${
            colorSeleccionado === "beige" ? "seleccionado" : ""
          }`}
          onClick={() => setColorSeleccionado("beige")}
        >
          {colorSeleccionado === "beige" && "✕"}
        </span>
        <span
          className={`color green ${
            colorSeleccionado === "green" ? "seleccionado" : ""
          }`}
          onClick={() => setColorSeleccionado("green")}
        >
          {colorSeleccionado === "green" && "✕"}
        </span>
        <span
          className={`color yellow ${
            colorSeleccionado === "yellow" ? "seleccionado" : ""
          }`}
          onClick={() => setColorSeleccionado("yellow")}
        >
          {colorSeleccionado === "yellow" && "✕"}
        </span>
      </div>
      <h4>Cantidad:</h4>
      <div className="quantity">
        <button
          onClick={() => setCantidad(cantidad > 1 ? cantidad - 1 : 1)}
        >
          -
        </button>
        <span>{cantidad}</span>
        <button
          onClick={() => setCantidad(cantidad + 1)}
        >
          +
        </button>
      </div>
      <button
        className="buy-btn"
        onClick={agregarCarrito}
      >
        Agregar al carrito
      </button>
    </section>
  );
}
export default ProductInfo;