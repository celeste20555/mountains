import { useEffect, useState } from "react";
import "./Categories.css";
import CategoryCard from "./CategoryCard";

import cocinaCirculo from "../../imagenes/cocina_circulo.svg";
import limpiezaCirculo from "../../imagenes/limpieza_circulo.svg";
import herramientasCirculo from "../../imagenes/herramientas_circulos.svg";
import dormirCirculo from "../../imagenes/equi_dormir_circulo.svg";
import iluminacionCirculo from "../../imagenes/iluminacion_circulo.svg";
import alimentosCirculo from "../../imagenes/alimentos_circulo.svg";
import saludCirculo from "../../imagenes/salud_circulo.svg";
import ropaCirculo from "../../imagenes/ropa_circulo.svg";
import comunicacionCirculo from "../../imagenes/comunicacion_circulo.svg";
import campingCirculo from "../../imagenes/equi_camping_circulo.svg";

function Categories({ irACategoria }) {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        if (datos.ok) {
          const categoriasGoogle = datos.categorias
            .slice(1)
            .map((fila) => ({
              titulo: fila[0],
              imagen: fila[1]
                .replace(
                  "https://drive.google.com/file/d/",
                  "https://drive.google.com/thumbnail?id="
                )
                .replace("/view?usp=sharing", ""),
              descripcion: fila[2],
            }))
            .filter((categoria) => categoria.titulo);


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

  const iconos = [
    cocinaCirculo,
    limpiezaCirculo,
    herramientasCirculo,
    dormirCirculo,
    iluminacionCirculo,
    alimentosCirculo,
    saludCirculo,
    ropaCirculo,
    comunicacionCirculo,
    campingCirculo,
  ];

  const colores = [
    "#D2B244",
    "#8B9B68",
    "#D2B244",
    "#9BB24A",
    "#D2B244",
    "#8B9B68",
    "#D2B244",
    "#A7B164",
    "#D2B244",
    "#8B9B68",
  ];

  return (
    <section className="categories">

      <div className="categories-title">

        <span className="material-symbols-outlined camping-icon">
          camping
        </span>

        <h2>- Categorías -</h2>

        <span className="material-symbols-outlined camping-icon camping-right">
          camping
        </span>

      </div>

      <h3>DESTACADOS</h3>

      <div className="categories-grid">

        {categorias.map((categoria, index) => (

          <CategoryCard
            key={index}
            imagen={categoria.imagen}
            icono={iconos[index]}
            titulo={categoria.titulo}
            descripcion={categoria.descripcion}
            color={colores[index]}
            categoria={categoria.titulo}
            irACategoria={irACategoria}
          />

        ))}

      </div>

    </section>
  );
}

export default Categories;