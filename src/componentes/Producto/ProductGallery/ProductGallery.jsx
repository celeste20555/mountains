import { useEffect, useState } from "react";
import "./ProductGallery.css";

export default function ProductGallery({ producto }) {
  
  const imagenes = [
    producto?.imagen,
    producto?.imagen2,
    producto?.imagen3,
  ].filter(Boolean);

  const [imagenActual, setImagenActual] = useState(
    imagenes[0] || ""
  );

  const [indice, setIndice] = useState(0);

  useEffect(() => {
    const nuevasImagenes = [
      producto?.imagen,
      producto?.imagen2,
      producto?.imagen3,
    ].filter(Boolean);

    setImagenActual(nuevasImagenes[0] || "");
    setIndice(0);
  }, [producto]);

  const siguienteImagen = () => {
    if (imagenes.length <= 1) return;

    const nuevoIndice =
      indice === imagenes.length - 1
        ? 0
        : indice + 1;

    setIndice(nuevoIndice);
    setImagenActual(imagenes[nuevoIndice]);
  };

  const anteriorImagen = () => {
    if (imagenes.length <= 1) return;

    const nuevoIndice =
      indice === 0
        ? imagenes.length - 1
        : indice - 1;

    setIndice(nuevoIndice);
    setImagenActual(imagenes[nuevoIndice]);
  };

  return (
    <section className="product-gallery">

      <div className="product-main-image">
        <img
          src={imagenActual}
          alt={
            producto?.nombre ||
            "Imagen del producto"
          }
        />
      </div>

      <div className="product-gallery-carousel">

        <button
          className="product-gallery-arrow product-gallery-left"
          onClick={anteriorImagen}
        >
          &#8249;
        </button>

        <div className="product-gallery-images">

          {imagenes.map((imagen, index) => (
            <img
              key={index}
              src={imagen}
              alt={`${producto?.nombre || "Producto"} ${index + 1}`}
              onClick={() => {
                setImagenActual(imagen);
                setIndice(index);
              }}
            />
          ))}

        </div>

        <button
          className="product-gallery-arrow product-gallery-right"
          onClick={siguienteImagen}
        >
          &#8250;
        </button>

      </div>

    </section>
  );
}