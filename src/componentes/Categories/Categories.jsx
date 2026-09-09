import "./Categories.css";
import CategoryCard from "./CategoryCard";
import cocina from "../../imagenes/cocina.png";
import limpieza from "../../imagenes/limpieza.png";
import herramientas from "../../imagenes/herramientas.png";
import dormir from "../../imagenes/dormir.png";
import energia from "../../imagenes/energia.png";
import alimentos from "../../imagenes/alimentos.png";
import auxilios from "../../imagenes/auxilios.png";
import ropa from "../../imagenes/ropa.png";
import navegacion from "../../imagenes/navegacion.png";
import campo from "../../imagenes/campo.png";
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
        <CategoryCard
          imagen={cocina}
          icono={cocinaCirculo}
          titulo="Utensilios de Cocina"
          descripcion="Todo lo que necesitás para el aire libre y puedas cocinar."
          color="#D2B244"
          categoria="Utensilios de Cocina"
          irACategoria={irACategoria}
        />
        <CategoryCard
          imagen={limpieza}
          icono={limpiezaCirculo}
          titulo="Artículos de Limpieza"
          descripcion="Higiene y limpieza practica para cada producto."
          color="#8B9B68"
          categoria="Artículos de Limpieza"
          irACategoria={irACategoria}
        />
        <CategoryCard
          imagen={herramientas}
          icono={herramientasCirculo}
          titulo="Herramientas y accesorios"
          descripcion="Herramientas esenciales para cualquier terreno."
          color="#D2B244"
          categoria="Herramientas y Accesorios"
          irACategoria={irACategoria}
        />
        <CategoryCard
          imagen={dormir}
          icono={dormirCirculo}
          titulo="Equipamiento para Dormir"
          descripcion="Todo lo necesario para descansar y dormir bien lindo."
          color="#9BB24A"
          categoria="Equipamiento para dormir"
          irACategoria={irACategoria}
        />
        <CategoryCard
          imagen={energia}
          icono={iluminacionCirculo}
          titulo="Iluminación y Energía"
          descripcion="Todo lo que necesitás para cualquier situacion."
          color="#D2B244"
          categoria="Iluminación y Energía"
          irACategoria={irACategoria}
        />
        <CategoryCard
          imagen={alimentos}
          icono={alimentosCirculo}
          titulo="Alimentos y Bebidas"
          descripcion="Comida para el aire libre para no morirte de hambre."
          color="#8B9B68"
          categoria="Alimentos y Bebidas"
          irACategoria={irACategoria}
        />
        <CategoryCard
          imagen={auxilios}
          icono={saludCirculo}
          titulo="Salud y Primeros Auxilios"
          descripcion="Elementos de emergencia para casi cualquier ayuda."
          color="#D2B244"
          categoria="Salud y Primeros Auxilios"
          irACategoria={irACategoria}
        />
        <CategoryCard
          imagen={ropa}
          icono={ropaCirculo}
          titulo="Ropa y Protección"
          descripcion="Indumentaria para camping para estar protegido siempre."
          color="#A7B164"
          categoria="Ropa y protección"
          irACategoria={irACategoria}
        />
        <CategoryCard
          imagen={navegacion}
          icono={comunicacionCirculo}
          titulo="Comuni. y Navegación"
          descripcion="Equipos y accesorios casi cualquier tipo de situacion."
          color="#D2B244"
          categoria="Comunicación y Navegación"
          irACategoria={irACategoria}
        />
        <CategoryCard
          imagen={campo}
          icono={campingCirculo}
          titulo="Equipa. para el Campo"
          descripcion="Cosas que te ayudan para el campo y en tu dia a dia."
          color="#8B9B68"
          categoria="Equipamiento para el Campo"
          irACategoria={irACategoria}
        />
      </div>
    </section>
  );
}
export default Categories;