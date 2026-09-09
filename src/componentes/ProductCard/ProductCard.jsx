import "./ProductCard.css";

function ProductCard({
  imagen,
  nombre,
  precio,
  setMostrarProducto,
  setMostrarBusqueda,
}) {
  const abrirProducto = () => {
    if (setMostrarBusqueda) {
      setMostrarBusqueda(false);
    }

    if (setMostrarProducto) {
      setMostrarProducto(true);
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="product-card">
      <img
        src={imagen}
        alt={nombre}
      />

      <div className="card-info">
        <h3>{nombre}</h3>
        <p>{precio}</p>

        <button onClick={abrirProducto}>
          Ver producto →
        </button>
      </div>
    </div>
  );
}

export default ProductCard;