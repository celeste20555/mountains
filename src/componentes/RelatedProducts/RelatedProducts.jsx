import { useEffect, useState } from "react";
import "./RelatedProducts.css";
import ProductCard from "../ProductCard/ProductCard";

function RelatedProducts({
    setMostrarProducto,
    orden,
    categoria,
}) {
    const [productos, setProductos] = useState([]);

<<<<<<< Updated upstream
  useEffect(() => {
    fetch("http://localhost:3001")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        if (datos.ok) {
          const productosGoogle = datos.datos
            .slice(1)
            .map((fila) => ({
              nombre: fila[0],
              precio: Number(fila[1]),
              stock: Number(fila[2]),
              categoria: fila[3],
              imagen: fila[4]
                .replace(
                  "https://drive.google.com/file/d/",
                  "https://drive.google.com/thumbnail?id="
                )
                .replace("/view?usp=sharing", ""),
              descripcion: fila[5],
              imagen2: fila[6],
              imagen3: fila[7],
            }))
            .filter((producto) => producto.nombre);
=======
    useEffect(() => {
        fetch("http://localhost:3001")
            .then((respuesta) => respuesta.json())
            .then((datos) => {
                if (datos.ok) {
                    const productosGoogle = datos.datos
                        .slice(1)
                        .map((fila) => ({
                            nombre: fila[0],
                            precio: `$${Number(fila[1]).toLocaleString("es-AR")}`,
                            stock: Number(fila[2]),
                            categoria: fila[3],
                            imagen: fila[4],
                            descripcion: fila[5],
                            imagen2: fila[6],
                            imagen3: fila[7],
                        }))
                        .filter((producto) => producto.nombre);
>>>>>>> Stashed changes

                    setProductos(productosGoogle);
                }
            })
            .catch((error) => {
                console.error("Error al obtener productos:", error);
            });
    }, []);

   

    const normalizar = (texto) => {
    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();
};

const productosFiltrados =
    categoria && normalizar(categoria) !== "todas las categorias"
        ? productos.filter(
              (producto) =>
                  normalizar(producto.categoria) === normalizar(categoria)
          )
        : productos;

<<<<<<< Updated upstream
        const productosOrdenados = [...productosCategoria].sort(
          (a, b) => {
            const precioA = a.precio;
            const precioB = b.precio;
=======
   
    const categoriasMostrar = [
        ...new Set(
            productosFiltrados
                .map((producto) => producto.categoria)
                .filter(Boolean)
        ),
    ];

    return (
        <div className="related-products">
>>>>>>> Stashed changes

            {categoriasMostrar.map((nombreCategoria, index) => {

                

                const productosCategoria = productosFiltrados.filter(
                    (producto) =>
                        producto.categoria === nombreCategoria
                );

               

                const productosOrdenados = [
                    ...productosCategoria,
                ].sort((a, b) => {

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

                return (
                    <section
                        className={`related-section related${index + 1}`}
                        id={`categoria-${nombreCategoria}`}
                        key={nombreCategoria}
                    >

                        <div className={`subtitulos${index + 1}`}>
                            <h2>{nombreCategoria}</h2>
                        </div>

                        <div className="related-container">

                            <div className="related-grid">

                                {productosOrdenados.map(
                                    (producto, i) => (
                                        <ProductCard
                                            key={i}
                                            imagen={producto.imagen}
                                            nombre={producto.nombre}
                                            precio={producto.precio}
                                            producto={producto}
                                            setMostrarProducto={
                                                setMostrarProducto
                                            }
                                        />
                                    )
                                )}

                            </div>

                        </div>

                    </section>
                );
            })}

        </div>
    );
}

export default RelatedProducts;