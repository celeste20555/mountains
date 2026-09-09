import { useState } from "react";
import "./ProductInfo.css";

export default function ProductInfo({ carrito, setCarrito, producto }) {
  const [cantidad, setCantidad] = useState(1);
  const [colorSeleccionado, setColorSeleccionado] = useState("");

  if (!producto) {
    return null;
  }

  const productoParaCarrito = {
    ...producto,
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
              cantidad: item.cantidad + productoParaCarrito.cantidad
            }
            : item
        )
      );
    } else {
      setCarrito([...carrito, productoParaCarrito]);
    }
  };

  return (
    <section className="product-info">

      <h1>{producto.nombre}</h1>

      <h2>${producto.precio}</h2>

      <p>
        {producto.descripcion}
      </p>

      <h4>Colores disponibles:</h4>

      <div className="colors">

        <span
          className={`color beige ${colorSeleccionado === "beige" ? "seleccionado" : ""
            }`}
          onClick={() => setColorSeleccionado("beige")}
        >
          {colorSeleccionado === "beige" && "✕"}
        </span>

        <span
          className={`color green ${colorSeleccionado === "green" ? "seleccionado" : ""
            }`}
          onClick={() => setColorSeleccionado("green")}
        >
          {colorSeleccionado === "green" && "✕"}
        </span>

        <span
          className={`color yellow ${colorSeleccionado === "yellow" ? "seleccionado" : ""
            }`}
          onClick={() => setColorSeleccionado("yellow")}
        >
          {colorSeleccionado === "yellow" && "✕"}
        </span>

      </div>

      <h4>Cantidad:</h4>

      <div className="quantity">

        <button
          onClick={() =>
            setCantidad(cantidad > 1 ? cantidad - 1 : 1)
          }
        >
          -
        </button>

        <span>{cantidad}</span>
        
        <button
          onClick={() => setCantidad (
            cantidad < producto.stock
              ? cantidad + 1
              : cantidad
          )
          }
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