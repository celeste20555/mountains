import { useEffect, useState } from "react";
import "./Busqueda.css";
import ProductCard from "../ProductCard/ProductCard";
import Montanias from "../../imagenes/Montanias.png";

function Busqueda({
  textoBusqueda,
  setMostrarBusqueda,
  setMostrarProducto,
}) {
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);

  const [orden, setOrden] = useState("Más vendidos");

  const [categoriaSeleccionada, setCategoriaSeleccionada] =
    useState("Todas las categorías");

  useEffect(() => {
    fetch("http://localhost:3001")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        if (datos.ok) {
          const productosGoogle = datos.datos
            .slice(1)
            .map((fila) => ({
              nombre: fila[0],
              precio: `$${Number(
                fila[1]
              ).toLocaleString("es-AR")}`,
              stock: Number(fila[2]),
              categoria: fila[3],
              imagen: fila[4],
              descripcion: fila[5],
              imagen2: fila[6],
              imagen3: fila[7],
            }));

          setProductos(productosGoogle);

          const categoriasGoogle = datos.categorias
            .slice(1)
            .map((fila) => ({
              titulo: fila[0],
              imagen: fila[1],
              descripcion: fila[2],
            }))
            .filter((categoria) => categoria.titulo);

          setCategorias(categoriasGoogle);
        }
      })
      .catch((error) => {
        console.error(
          "Error al obtener productos:",
          error
        );
      });
  }, []);

  const resultados = productos
    .filter((producto) =>
      producto.nombre
        .toLowerCase()
        .includes(textoBusqueda.toLowerCase())
    )
    .filter((producto) => {
      if (
        categoriaSeleccionada ===
        "Todas las categorías"
      ) {
        return true;
      }

      return (
        producto.categoria ===
        categoriaSeleccionada
      );
    })
    .sort((a, b) => {
      const precioA = Number(
        a.precio
          .replace("$", "")
          .replace(/\./g, "")
      );

      const precioB = Number(
        b.precio
          .replace("$", "")
          .replace(/\./g, "")
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
    setCategoriaSeleccionada(
      "Todas las categorías"
    );
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

        <span className="flecha">
          {">"}
        </span>

        <span>Buscar</span>

      </div>

      <div className="encabezado-busqueda">

        <div>

          <h1>
            Resultado para: "{textoBusqueda}"
          </h1>

          <p>
            Se encontraron{" "}
            {resultados.length} productos
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

            {categorias.map(
              (categoria, index) => (
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
              )
            )}

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
              onChange={(e) =>
                setOrden(e.target.value)
              }
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
                setCategoriaSeleccionada(
                  e.target.value
                )
              }
            >

              <option value="Todas las categorías">
                Todas las categorías
              </option>

              {categorias.map(
                (categoria, index) => (
                  <option
                    key={index}
                    value={categoria.titulo}
                  >
                    {categoria.titulo}
                  </option>
                )
              )}

            </select>

          </div>

          <div className="cards-busqueda">

            {resultados.length > 0 ? (

              resultados.map(
                (producto, index) => (
                  <ProductCard
                    key={index}
                    imagen={producto.imagen}
                    nombre={producto.nombre}
                    precio={producto.precio}
                    producto={producto}
                    setMostrarProducto={
                      setMostrarProducto
                    }
                  />
                )
              )

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