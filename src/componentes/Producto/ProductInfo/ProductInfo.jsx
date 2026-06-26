import "./ProductInfo.css";

function ProductInfo() {
  return (
    <section className="product-info">

      <h1>Carpa Explorer 2p</h1>

      <h2>$30.000</h2>

      <p>
        Un set matero y de camping completo reúne los elementos
        esenciales para disfrutar al aire libre. Incluye termo y mate,
        platos, cubiertos, ollas y loncheras, ofreciendo practicidad y
        comodidad para viajes, picnics y campamentos.
      </p>

      <h4>Colores disponibles:</h4>

      <div className="colors">
        <span className="color beige"></span>
        <span className="color green"></span>
        <span className="color yellow"></span>
      </div>

      <h4>Cantidad:</h4>

      <div className="quantity">
        <button>-</button>
        <span>1</span>
        <button>+</button>
      </div>

      <button className="buy-btn">
        Agregar al carrito
      </button>

    </section>
  );
}

export default ProductInfo;