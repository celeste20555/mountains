import "./Busqueda.css";

import ProductCard from "../ProductCard/ProductCard";

import Carpa from "../../imagenes/Carpa.png";
import Bolsa from "../../imagenes/Bolsa_dedormir.png";
import Gorra from "../../imagenes/Gorra.png";
import Montanias from "../../imagenes/Montanias.png";

function Busqueda({setMostrarBusqueda}) {
  return (
    <main className="busqueda">

      <div className="ruta">
        <span className="inicio" onClick={()=> setMostrarBusqueda(false)}>Inicio</span>
        <span className="flecha">{">"}</span>
        <span>Buscar</span>
      </div>
      

      <div className="encabezado-busqueda">
        <div>
          <h1>Resultado para : "carpa"</h1>
          <p>Se encontraron 2 productos</p>
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
              Equipamiento para dormir (2)
            </label>

            <label>
              <input type="checkbox" />
              Ropa y protección (0)
            </label>

            <label>
              <input type="checkbox" />
              Iluminación y energía (0)
            </label>
          </div>

          <div className="grupo">
            <h4>Precio</h4>

            <label>
              <input type="radio" name="precio" />
              Todos los precios
            </label>

            <label>
              <input type="radio" name="precio" />
              Hasta $20.000
            </label>

            <label>
              <input type="radio" name="precio" />
              $20.000 a $40.000
            </label>

            <label>
              <input type="radio" name="precio" />
              Más de $40.000
            </label>
          </div>

          <div className="grupo">
            <h4>Disponibilidad</h4>

            <label>
              <input type="checkbox" />
              Solo productos en stock
            </label>
          </div>

          <button className="limpiar">
            Limpiar filtros
          </button>

        </aside>

        <section className="productos-busqueda">

          <div className="barra-filtros">

            <select>
              <option>Mas vendidios</option>
            </select>

            <select>
              <option>Todas las categorías</option>
            </select>

          </div>

          <div className="cards-busqueda">

            <ProductCard
              imagen={Carpa}
              nombre="Carpa explorer 2p"
              precio="$30.000"
            />

            <ProductCard
              imagen={Gorra}
              nombre="Gorra de campo"
              precio="$5.000"
            />

            <ProductCard
              imagen={Bolsa}
              nombre="Bolsa de dormir"
              precio="$25.000"
            />

          </div>

        </section>

      </div>

    </main>
  );
}

export default Busqueda;