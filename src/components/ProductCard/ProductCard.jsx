import "./ProductCard.css";
function ProductCard({ imagen, nombre, precio }) {
  return (
    <div className="product-card">
      <img src={imagen} alt={nombre} />
      <div className="card-info">
        <h3>{nombre}</h3>
        <p>{precio}</p>
        <button>
          Ver producto →
        </button>
      </div>
    </div>
  );
}
export default ProductCard;