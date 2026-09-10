import { useEffect, useState } from "react";
import "./HomeProducts.css";
import ProductCard from "../ProductCard/ProductCard";

function HomeProducts({ setMostrarProducto }) {
  const [inicio, setInicio] = useState(0);
  const [productos, setProductos] = useState([]);
  const [esResponsive, setEsResponsive] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const cambiarPantalla = () => {
      setEsResponsive(window.innerWidth <= 768);
    };

    window.addEventListener("resize", cambiarPantalla);

    return () => {
      window.removeEventListener("resize", cambiarPantalla);
    };
  }, []);

  useEffect(() => {
    fetch("http://localhost:3001")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        if (datos.ok) {
          const productosGoogle = datos.datos.slice(1).map((fila) => ({
            nombre: fila[0],
            precio: Number(fila[1]),
            stock: Number(fila[2]),
            categoria: fila[3],
            descripcion: fila[5],
            imagen: fila[4]
              .replace(
                "https://drive.google.com/file/d/",
                "https://drive.google.com/thumbnail?id="
              )
              .replace("/view?usp=sharing", ""),
            imagen2: fila[6]
              ? fila[6]
                .replace(
                  "https://drive.google.com/file/d/",
                  "https://drive.google.com/thumbnail?id="
                )
                .replace("/view?usp=sharing", "")
              : "",
            imagen3: fila[7]
              ? fila[6]
                .replace(
                  "https://drive.google.com/file/d/",
                  "https://drive.google.com/thumbnail?id="
                )
                .replace("/view?usp=sharing", "")
              : "",
          }));

          setProductos(productosGoogle);
        }
      })
      .catch((error) => {
        console.error("Error al obtener productos:", error);
      });
  }, []);

  return (
    <section className="home-products-section">

      <div className="titulo-productos">
        <div className="linea"></div>

        <h2>Productos que le pueden interesar</h2>
      </div>

      <section className="home-products">

        <button className="flecha izquierda"
          onClick={() => {
            if (inicio === 0) {
              setInicio(esResponsive ? productos.length - 1 : Math.max(0, productos.length - 3));
            } else {
              setInicio(inicio - (esResponsive ? 1 : 3));
            }
          }}
        >
          &#8249;
        </button>

        <div className="productos-contenedor">

          {productos.slice(inicio, inicio + (esResponsive ? 1 : 3)).map((producto, index) =>
            <ProductCard
              key={index}
              imagen={producto.imagen}
              nombre={producto.nombre}
              precio={producto.precio}
              producto={producto}
              setMostrarProducto={setMostrarProducto}
            />
          )}

        </div>

        <button className="flecha derecha"
          onClick={() => {
            if (esResponsive) {
              setInicio(inicio === productos.length - 1 ? 0 : inicio + 1);
            } else {
              setInicio(inicio + 3 >= productos.length ? 0 : inicio + 3);
            }
          }}
        >
          &#8250;
        </button>

      </section>

    </section>
  );
}

export default HomeProducts;