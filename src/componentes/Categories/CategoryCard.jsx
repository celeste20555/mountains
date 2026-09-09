import "./CategoryCard.css";
function CategoryCard({
  imagen,
  titulo,
  descripcion,
  color,
  icono,
  categoria,
  irACategoria,
}) {
  return (
    <div className="category-wrapper">
      <div className="category-icon">
        <img src={icono} alt="" />
      </div>
      <div className="category-card">
        <img
          className="category-image"
          src={imagen}
          alt={titulo}
        />
        <div className="category-info">
          <h3>{titulo}</h3>
          <p>{descripcion}</p>
          <button
            style={{ background: color }}
            onClick={() => irACategoria(categoria)}
          >
            Ver producto →
          </button>
        </div>
      </div>
    </div>
  );
}
export default CategoryCard;