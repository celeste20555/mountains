import "./ListadeProducts.css";
import { useState } from "react";
import RelatedProducts from "../RelatedProducts/RelatedProducts";

function ListadeProducts({ setMostrarProducto }) {
  const [orden, setOrden] = useState("Mas vendidos");
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(
    "Todas las categorías"
  );

  return (
    <>
      <div className="ofertas">
        <h2>Nuestros productos imperdibles al</h2>
        <h3>50% OFF</h3>
      </div>

      <section className="filtros">
        <button className="categoria">
          TODAS LAS CATEGORÍAS
        </button>

        <div className="derecha">
          {/* ORDENAR PRODUCTOS */}
          <select
            value={orden}
            onChange={(e) => setOrden(e.target.value)}
          >
            <option value="Mas vendidos">Mas vendidos</option>
            <option value="Mayor precio">Mayor precio</option>
            <option value="Menor precio">Menor precio</option>
          </select>

          {/* FILTRAR POR CATEGORÍA */}
          <select
            value={categoriaSeleccionada}
            onChange={(e) => setCategoriaSeleccionada(e.target.value)}
          >
            <option value="Todas las categorías">
              Todas las categorías
            </option>

            <option value="Equipamiento para dormir">
              Equipamiento para dormir
            </option>

            <option value="Ropa y protección">
              Ropa y protección
            </option>

            <option value="Iluminación y Energía">
              Iluminación y Energía
            </option>

            <option value="Utensilios de Cocina">
              Utensilios de Cocina
            </option>

            <option value="Artículos de Limpieza">
              Artículos de Limpieza
            </option>

            <option value="Herramientas y Accesorios">
              Herramientas y Accesorios
            </option>

            <option value="Alimentos y Bebidas">
              Alimentos y Bebidas
            </option>

            <option value="Salud y Primeros Auxilios">
              Salud y Primeros Auxilios
            </option>

            <option value="Comunicación y Navegación">
              Comunicación y Navegación
            </option>

            <option value="Equipamiento para el Campo">
              Equipamiento para el Campo
            </option>
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