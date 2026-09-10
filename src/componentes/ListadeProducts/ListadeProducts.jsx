import { useEffect, useState } from "react";
import "./ListadeProducts.css";
import RelatedProducts from "../RelatedProducts/RelatedProducts";

function ListadeProducts({
  setMostrarProducto,
  categoriaSeleccionada,
  setCategoriaSeleccionada,
}) {
  const [orden, setOrden] = useState("Mas vendidos");
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        if (datos.ok) {
          const categoriasGoogle = datos.categorias
            .slice(1)
            .map((fila) => fila[0])
            .filter(Boolean);

          setCategorias(categoriasGoogle);
        }
      })
      .catch((error) => {
        console.error(
          "Error al obtener categorías:",
          error
        );
      });
  }, []);

  useEffect(() => {
    const tiempo = setTimeout(() => {
      if (
        categoriaSeleccionada ===
        "Todas las categorías"
      ) {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        return;
      }

      const elemento = document.getElementById(
        `categoria-${categoriaSeleccionada}`
      );

      if (elemento) {
        elemento.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 300);

    return () => clearTimeout(tiempo);
  }, [categoriaSeleccionada]);

  return (
    <>
      <div className="ofertas">
        <h2>Nuestros productos imperdibles al</h2>
        <h3>50% OFF</h3>
      </div>

      <section className="filtros">
        <button
          className="categoria"
          onClick={() =>
            setCategoriaSeleccionada(
              "Todas las categorías"
            )
          }
        >
          TODAS LAS CATEGORÍAS
        </button>

        <div className="derecha">
          <select
            value={orden}
            onChange={(e) =>
              setOrden(e.target.value)
            }
          >
            <option value="Mas vendidos">
              Mas vendidos
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

            {categorias.map((categoria) => (
              <option
                key={categoria}
                value={categoria}
              >
                {categoria}
              </option>
            ))}
          </select>
        </div>
      </section>

      <RelatedProducts
        setMostrarProducto={setMostrarProducto}
        orden={orden}
        categoria={categoriaSeleccionada}
      />
    </>
  );
}

export default ListadeProducts;