import "./Busqueda.css";
import ProductCard from "../ProductCard/ProductCard";
import Carpa from "../../imagenes/Carpa.png";
import Bolsa from "../../imagenes/Bolsa_dedormir.png";
import Gorra from "../../imagenes/Gorra.png";
import Montanias from "../../imagenes/Montanias.png";
function Busqueda({ textoBusqueda, setMostrarBusqueda }) {
  const productos = [
    {
      imagen: Carpa,
      nombre: "Carpa explorer 2p",
      precio: "$30.000",
    },
    {
      imagen: Gorra,
      nombre: "Gorra de campo",
      precio: "$5.000",
    },
    {
      imagen: Bolsa,
      nombre: "Bolsa de dormir",
      precio: "$25.000",
    },
  ];
  const resultados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(textoBusqueda.toLowerCase())
  );
  return (
    <main className="busqueda">
      <div className="ruta">
        <span
          className="inicio"
          onClick={() => setMostrarBusqueda(false)}
        >
          Inicio
        </span>
        <span className="flecha">{">"}</span>
        <span>Buscar</span>
      </div>
      <div className="encabezado-busqueda">
        <div>
          <h1>Resultado para: "{textoBusqueda}"</h1>
          <p>
            Se encontraron {resultados.length} productos
          </p>
        </div>
        <img
          src={Montanias}
          alt="logo"
          className="logo-busqueda"
        />
      </div>
      <div className="contenido-busqueda">
        <aside className="panel-filtros">
          <h3>FILTRAR RESULTADOS</h3>
          <div className="grupo">
            <h4>Categoría</h4>
            <label>
              <input type="checkbox" />
              Todas las categorías
            </label>
            <label>
              <input type="checkbox" />
              Equipamiento para dormir
            </label>
            <label>
              <input type="checkbox" />
              Ropa y protección
            </label>
            <label>
              <input type="checkbox" />
              Iluminación y energía
            </label>
          </div>
          <button className="limpiar">
            Limpiar filtros
          </button>
        </aside>
        <section className="productos-busqueda">
          <div className="barra-filtros">
            <select>
              <option>Más vendidos</option>
            </select>
            <select>
              <option>Todas las categorías</option>
            </select>
          </div>
          <div className="cards-busqueda">
            {resultados.length > 0 ? (
              resultados.map((producto, index) => (
                <ProductCard
                  key={index}
                  imagen={producto.imagen}
                  nombre={producto.nombre}
                  precio={producto.precio}
                />
              ))
            ) : (
              <h2>No se encontraron productos.</h2>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
export default Busqueda;