import "./Busqueda.css";

import { useState } from "react";
import { categorias } from "../RelatedProducts/RelatedProducts";
import ProductCard from "../ProductCard/ProductCard";
import Montanias from "../../imagenes/Montanias.png";

function Busqueda({textoBusqueda,setMostrarBusqueda,setMostrarProducto,}){
  const [orden, setOrden] = useState("Más vendidos");
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(
    "Todas las categorías"
  );

  const productos = categorias.flatMap((categoria) =>
    categoria.productos.map((producto) => ({
      ...producto,
      categoria: categoria.titulo,
    }))
  );

  const resultados = productos
    .filter((producto) =>
      producto.nombre
        .toLowerCase()
        .includes(textoBusqueda.toLowerCase())
    )
    .filter((producto) => {
      if (categoriaSeleccionada === "Todas las categorías") {
        return true;
      }

      return producto.categoria === categoriaSeleccionada;
    })
    .sort((a, b) => {
      const precioA = Number(
        a.precio.replace("$", "").replace(".", "")
      );

      const precioB = Number(
        b.precio.replace("$", "").replace(".", "")
      );

      if (orden === "Mayor precio") {
        return precioB - precioA;
      }

      if (orden === "Menor precio") {
        return precioA - precioB;
      }

      return 0;
    });

  const limpiarFiltros = () => {
    setOrden("Más vendidos");
    setCategoriaSeleccionada("Todas las categorías");
  };

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
              <input
                type="radio"
                name="categoria"
                checked={
                  categoriaSeleccionada ===
                  "Todas las categorías"
                }
                onChange={() =>
                  setCategoriaSeleccionada(
                    "Todas las categorías"
                  )
                }
              />

              Todas las categorías
            </label>

            {categorias.map((categoria, index) => (
              <label key={index}>
                <input
                  type="radio"
                  name="categoria"
                  checked={
                    categoriaSeleccionada ===
                    categoria.titulo
                  }
                  onChange={() =>
                    setCategoriaSeleccionada(
                      categoria.titulo
                    )
                  }
                />

                {categoria.titulo}
              </label>
            ))}
          </div>

          <button
            className="limpiar"
            onClick={limpiarFiltros}
          >
            Limpiar filtros
          </button>
        </aside>

        <section className="productos-busqueda">
          <div className="barra-filtros">
            <select
              value={orden}
              onChange={(e) => setOrden(e.target.value)}
            >
              <option value="Más vendidos">
                Más vendidos
              </option>

              <option value="Mayor precio">
                Mayor precio
              </option>

              <option value="Menor precio">
                Menor precio
              </option>
            </select>

            <select
              value={categoriaSeleccionada}
              onChange={(e) =>
                setCategoriaSeleccionada(e.target.value)
              }
            >
              <option value="Todas las categorías">
                Todas las categorías
              </option>

              {categorias.map((categoria, index) => (
                <option
                  key={index}
                  value={categoria.titulo}
                >
                  {categoria.titulo}
                </option>
              ))}
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
                  setMostrarProducto={setMostrarProducto}
                  setMostrarBusqueda={setMostrarBusqueda}
                />
              ))
            ) : (
              <h2>
                No se encontraron productos.
              </h2>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

export default Busqueda;