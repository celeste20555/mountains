import "./RelatedProducts.css";
import ProductCard from "../ProductCard/ProductCard";
import Carpa from "../../imagenes/Carpa.png";
import Amaca_Paraguaya from "../../imagenes/Amaca_paraguaya.png";
import Bolsa_dedormir from "../../imagenes/Bolsa_dedormir.png";
import Silla_desplegable from "../../imagenes/Silla_desplegable.png";
import Campera from "../../imagenes/Campera.png";
import Bolsegos from "../../imagenes/Bolsegos.png";
import Gorra from "../../imagenes/Gorra.png";
import Termico from "../../imagenes/Termico.png";
import Panel from "../../imagenes/Panel.png";
import Linterna from "../../imagenes/Linterna.png";
import Mapa from "../../imagenes/Mapa.png";
import Radio from "../../imagenes/Radio.png";
export const categorias = [
  {
    clase: "related",
    subtitulo: "subtitulos",
    titulo: "Equipamiento para dormir",
    descripcion: "Todo para que descanses en cualquier aventura.",
    productos: [
      {
        imagen: Carpa,
        nombre: "Carpa",
        precio: "$30.000",
      },
      {
        imagen: Amaca_Paraguaya,
        nombre: "Amaca paraguaya",
        precio: "$20.000",
      },
      {
        imagen: Bolsa_dedormir,
        nombre: "Bolsa de dormir",
        precio: "$50.000",
      },
      {
        imagen: Silla_desplegable,
        nombre: "Silla desplegable",
        precio: "$27.000",
      },
    ],
  },

  {
    clase: "related2",
    subtitulo: "subtitulos2",
    titulo: "Ropa y protección",
    descripcion: "Toda la comodidad y protección que podés encontrar.",
    productos: [
      {
        imagen: Campera,
        nombre: "Campera térmica",
        precio: "$35.000",
      },
      {
        imagen: Bolsegos,
        nombre: "Bolsegos",
        precio: "$33.000",
      },
      {
        imagen: Gorra,
        nombre: "Gorro térmico",
        precio: "$10.000",
      },
      {
        imagen: Termico,
        nombre: "Pantalón térmico",
        precio: "$20.000",
      },
    ],
  },

  {
    clase: "related3",
    subtitulo: "subtitulos3",
    titulo: "Iluminación y Energía",
    descripcion: "Todo lo que necesitás para cualquier situación.",
    productos: [
      {
        imagen: Panel,
        nombre: "Panel solar",
        precio: "$32.000",
      },
      {
        imagen: Linterna,
        nombre: "Linterna",
        precio: "$10.000",
      },
      {
        imagen: Mapa,
        nombre: "Mapas personalizados",
        precio: "$14.000",
      },
      {
        imagen: Radio,
        nombre: "Radio",
        precio: "$32.000",
      },
    ],
  },

  {
    clase: "related4",
    subtitulo: "subtitulos4",
    titulo: "Utensilios de Cocina",
    descripcion: "Todo lo que necesitás para cocinar al aire libre.",
    productos: [
      {
        imagen: Panel,
        nombre: "Panel",
        precio: "$32.000",
      },
      {
        imagen: Linterna,
        nombre: "Linterna",
        precio: "$10.000",
      },
      {
        imagen: Mapa,
        nombre: "Mapa",
        precio: "$14.000",
      },
      {
        imagen: Radio,
        nombre: "Radio",
        precio: "$32.000",
      },
    ],
  },

  {
    clase: "related5",
    subtitulo: "subtitulos5",
    titulo: "Artículos de Limpieza",
    descripcion: "Higiene y limpieza para tus aventuras.",
    productos: [
      {
        imagen: Campera,
        nombre: "Campera",
        precio: "$35.000",
      },
      {
        imagen: Bolsegos,
        nombre: "Bolsegos",
        precio: "$33.000",
      },
      {
        imagen: Gorra,
        nombre: "Gorra",
        precio: "$10.000",
      },
      {
        imagen: Termico,
        nombre: "Pantalón",
        precio: "$20.000",
      },
    ],
  },

  {
    clase: "related6",
    subtitulo: "subtitulos6",
    titulo: "Herramientas y Accesorios",
    descripcion: "Herramientas esenciales para cualquier terreno.",
    productos: [
      {
        imagen: Panel,
        nombre: "Panel",
        precio: "$32.000",
      },
      {
        imagen: Linterna,
        nombre: "Linterna",
        precio: "$10.000",
      },
      {
        imagen: Mapa,
        nombre: "Mapa",
        precio: "$14.000",
      },
      {
        imagen: Radio,
        nombre: "Radio",
        precio: "$32.000",
      },
    ],
  },

  {
    clase: "related7",
    subtitulo: "subtitulos7",
    titulo: "Alimentos y Bebidas",
    descripcion: "Todo para disfrutar al aire libre.",
    productos: [
      {
        imagen: Panel,
        nombre: "Panel",
        precio: "$32.000",
      },
      {
        imagen: Linterna,
        nombre: "Linterna",
        precio: "$10.000",
      },
      {
        imagen: Mapa,
        nombre: "Mapa",
        precio: "$14.000",
      },
      {
        imagen: Radio,
        nombre: "Radio",
        precio: "$32.000",
      },
    ],
  },

  {
    clase: "related8",
    subtitulo: "subtitulos8",
    titulo: "Salud y Primeros Auxilios",
    descripcion: "Elementos esenciales para emergencias.",
    productos: [
      {
        imagen: Panel,
        nombre: "Panel",
        precio: "$32.000",
      },
      {
        imagen: Linterna,
        nombre: "Linterna",
        precio: "$10.000",
      },
      {
        imagen: Mapa,
        nombre: "Mapa",
        precio: "$14.000",
      },
      {
        imagen: Radio,
        nombre: "Radio",
        precio: "$32.000",
      },
    ],
  },

  {
    clase: "related9",
    subtitulo: "subtitulos9",
    titulo: "Comunicación y Navegación",
    descripcion: "Equipos para orientarte en cualquier lugar.",
    productos: [
      {
        imagen: Panel,
        nombre: "Panel",
        precio: "$32.000",
      },
      {
        imagen: Linterna,
        nombre: "Linterna",
        precio: "$10.000",
      },
      {
        imagen: Mapa,
        nombre: "Mapa",
        precio: "$14.000",
      },
      {
        imagen: Radio,
        nombre: "Radio",
        precio: "$32.000",
      },
    ],
  },

  {
    clase: "related10",
    subtitulo: "subtitulos10",
    titulo: "Equipamiento para el Campo",
    descripcion: "Todo lo necesario para trabajar y disfrutar.",
    productos: [
      {
        imagen: Panel,
        nombre: "Panel",
        precio: "$32.000",
      },
      {
        imagen: Linterna,
        nombre: "Linterna",
        precio: "$10.000",
      },
      {
        imagen: Mapa,
        nombre: "Mapa",
        precio: "$14.000",
      },
      {
        imagen: Radio,
        nombre: "Radio",
        precio: "$32.000",
      },
    ],
  },
];
function RelatedProducts({
  setMostrarProducto,
  orden,
}) {
  return (
    <div className="related-products">
      {categorias.map((categoria, index) => {
        const productosOrdenados = [...categoria.productos].sort(
          (a, b) => {
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
          }
        );
        return (
          <section
            className={`related-section ${categoria.clase}`}
            id={`categoria-${categoria.titulo}`}
            key={index}
          >
            <div className={categoria.subtitulo}>
              <h2>{categoria.titulo}</h2>
              <h3>{categoria.descripcion}</h3>
            </div>
            <div className="related-container">
              <div className="related-grid">
                {productosOrdenados.map((producto, i) => (
                  <ProductCard
                    key={i}
                    imagen={producto.imagen}
                    nombre={producto.nombre}
                    precio={producto.precio}
                    setMostrarProducto={setMostrarProducto}
                  />
                ))}
              </div>
            </div>
          </section>
        );
      })}

    </div>
  );
}
export default RelatedProducts;