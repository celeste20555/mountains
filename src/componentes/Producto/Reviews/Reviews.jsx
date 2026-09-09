import "./Reviews.css";

import { FaCommentDots, FaStar, FaUserCircle } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight, FiTrash2 } from "react-icons/fi";
import { useState } from "react";

function Reviews() {
  const [comentarios, setComentarios] = useState([
    {
      id: 1,
      nombre: "Romeo Santos",
      estrellas: 5,
      comentario:
        "Excelente producto! Me re gustó la calidad, volvería a comprar.",
      fecha: "hace 1 semana",
    },
    {
      id: 2,
      nombre: "Romeo Santos",
      estrellas: 5,
      comentario:
        "Excelente producto! Me re gustó la calidad, volvería a comprar.",
      fecha: "hace 1 semana",
    },
    {
      id: 3,
      nombre: "Romeo Santos",
      estrellas: 5,
      comentario:
        "Excelente producto! Me re gustó la calidad, volvería a comprar.",
      fecha: "hace 1 semana",
    },
  ]);

  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [nombre, setNombre] = useState("");
  const [nuevoComentario, setNuevoComentario] = useState("");
  const [nuevaPuntuacion, setNuevaPuntuacion] = useState(0);
  const [pagina, setPagina] = useState(0);

  const comentariosPorPagina = 3;

  const totalPaginas = Math.ceil(
    comentarios.length / comentariosPorPagina
  );

  const comentariosVisibles = comentarios.slice(
    pagina * comentariosPorPagina,
    pagina * comentariosPorPagina + comentariosPorPagina
  );

  const agregarComentario = (e) => {
    e.preventDefault();

    if (!nombre.trim()) {
      alert("Escribí tu nombre.");
      return;
    }

    if (!nuevoComentario.trim()) {
      alert("Escribí un comentario.");
      return;
    }

    if (nuevaPuntuacion === 0) {
      alert("Seleccioná una cantidad de estrellas.");
      return;
    }

    const nuevo = {
      id: Date.now(),
      nombre: nombre,
      estrellas: nuevaPuntuacion,
      comentario: nuevoComentario,
      fecha: "hace un momento",
    };

    setComentarios([...comentarios, nuevo]);

    setNombre("");
    setNuevoComentario("");
    setNuevaPuntuacion(0);
    setMostrarFormulario(false);

    setPagina(Math.floor(comentarios.length / comentariosPorPagina));
  };

  const eliminarComentario = (id) => {
    setComentarios(
      comentarios.filter((comentario) => comentario.id !== id)
    );

    if (
      pagina > 0 &&
      comentariosVisibles.length === 1
    ) {
      setPagina(pagina - 1);
    }
  };

  const anterior = () => {
    if (pagina > 0) {
      setPagina(pagina - 1);
    }
  };

  const siguiente = () => {
    if (pagina < totalPaginas - 1) {
      setPagina(pagina + 1);
    }
  };

  const mostrarEstrellas = (cantidad) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={
          index < cantidad ? "estrella activa" : "estrella"
        }
      />
    ));
  };

  return (
    <section className="reviews">

      

      <div className="reviews-left">

        <div className="comment-icon">
          <FaCommentDots />
        </div>

        <h2>COMENTARIOS</h2>

        <p>({comentarios.length} reseñas)</p>

        <div className="rating">
          {mostrarEstrellas(5)}
        </div>

        <button
          className="btn-comentar"
          onClick={() =>
            setMostrarFormulario(!mostrarFormulario)
          }
        >
          Escribir un comentario
        </button>

      </div>


      <div className="reviews-right">

        {comentarios.length > 0 && (
          <button
            className="review-arrow left"
            onClick={anterior}
            disabled={pagina === 0}
          >
            <FiChevronLeft />
          </button>
        )}

        <div className="reviews-list">

          {comentariosVisibles.map((review) => (
            <div className="review-card" key={review.id}>

              <div className="review-header">

                <div className="user">
                  <FaUserCircle />

                  <span>{review.nombre}</span>
                </div>

                <div className="review-actions">

                  <small>{review.fecha}</small>

                  <button
                    className="delete-review"
                    onClick={() =>
                      eliminarComentario(review.id)
                    }
                    title="Eliminar comentario"
                  >
                    <FiTrash2 />
                  </button>

                </div>

              </div>

              <div className="stars">
                {mostrarEstrellas(review.estrellas)}
              </div>

              <p>{review.comentario}</p>

            </div>
          ))}

          {comentarios.length === 0 && (
            <p className="sin-comentarios">
              Todavía no hay comentarios.
            </p>
          )}

        </div>

        {comentarios.length > 0 && (
          <button
            className="review-arrow right"
            onClick={siguiente}
            disabled={pagina === totalPaginas - 1}
          >
            <FiChevronRight />
          </button>
        )}

      </div>

      

      {mostrarFormulario && (
        <div className="formulario-review">

          <div className="formulario-review-contenido">

            <h3>Escribir un comentario</h3>

            <form onSubmit={agregarComentario}>

              <input
                type="text"
                placeholder="Tu nombre"
                value={nombre}
                onChange={(e) =>
                  setNombre(e.target.value)
                }
              />

              <div className="seleccionar-estrellas">

                <p>Tu puntuación:</p>

                <div>
                  {[1, 2, 3, 4, 5].map((estrella) => (
                    <FaStar
                      key={estrella}
                      className={
                        estrella <= nuevaPuntuacion
                          ? "estrella seleccionada"
                          : "estrella"
                      }
                      onClick={() =>
                        setNuevaPuntuacion(estrella)
                      }
                    />
                  ))}
                </div>

              </div>

              <textarea
                placeholder="Escribí tu comentario..."
                value={nuevoComentario}
                onChange={(e) =>
                  setNuevoComentario(e.target.value)
                }
              />

              <div className="botones-formulario">

                <button
                  type="button"
                  onClick={() =>
                    setMostrarFormulario(false)
                  }
                >
                  Cancelar
                </button>

                <button type="submit">
                  Publicar comentario
                </button>

              </div>

            </form>

          </div>

        </div>
      )}

    </section>
  );
}

export default Reviews;