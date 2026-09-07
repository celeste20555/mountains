import "./RelatedProducts.css";
import ProductCard from "../ProductCard/ProductCard";

// Dormir
import Carpa from "../../imagenes/Carpa.png";
import Amaca_Paraguaya from "../../imagenes/Amaca_paraguaya.png";
import Bolsa_dedormir from "../../imagenes/Bolsa_dedormir.png";
import Silla_desplegable from "../../imagenes/Silla_desplegable.png";

// Ropa
import Campera from "../../imagenes/Campera.png";
import Bolsegos from "../../imagenes/Bolsegos.png";
import Gorra from "../../imagenes/Gorra.png";
import Termico from "../../imagenes/Termico.png";

// Energía
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
        categoria: "Equipamiento para dormir",
      },
      {
        imagen: Amaca_Paraguaya,
        nombre: "Amaca paraguaya",
        precio: "$20.000",
        categoria: "Equipamiento para dormir",
      },
      {
        imagen: Bolsa_dedormir,
        nombre: "Bolsa de dormir",
        precio: "$50.000",
        categoria: "Equipamiento para dormir",
      },
      {
        imagen: Silla_desplegable,
        nombre: "Silla desplegable",
        precio: "$27.000",
        categoria: "Equipamiento para dormir",
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
        categoria: "Ropa y protección",
      },
      {
        imagen: Bolsegos,
        nombre: "Bolsegos",
        precio: "$33.000",
        categoria: "Ropa y protección",
      },
      {
        imagen: Gorra,
        nombre: "Gorro térmico",
        precio: "$10.000",
        categoria: "Ropa y protección",
      },
      {
        imagen: Termico,
        nombre: "Pantalón térmico",
        precio: "$20.000",
        categoria: "Ropa y protección",
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
        categoria: "Iluminación y Energía",
      },
      {
        imagen: Linterna,
        nombre: "Linterna",
        precio: "$10.000",
        categoria: "Iluminación y Energía",
      },
      {
        imagen: Mapa,
        nombre: "Mapas personalizados",
        precio: "$14.000",
        categoria: "Iluminación y Energía",
      },
      {
        imagen: Radio,
        nombre: "Radio",
        precio: "$32.000",
        categoria: "Iluminación y Energía",
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
        categoria: "Utensilios de Cocina",
      },
      {
        imagen: Linterna,
        nombre: "Linterna",
        precio: "$10.000",
        categoria: "Utensilios de Cocina",
      },
      {
        imagen: Mapa,
        nombre: "Mapa",
        precio: "$14.000",
        categoria: "Utensilios de Cocina",
      },
      {
        imagen: Radio,
        nombre: "Radio",
        precio: "$32.000",
        categoria: "Utensilios de Cocina",
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
        categoria: "Artículos de Limpieza",
      },
      {
        imagen: Bolsegos,
        nombre: "Bolsegos",
        precio: "$33.000",
        categoria: "Artículos de Limpieza",
      },
      {
        imagen: Gorra,
        nombre: "Gorra",
        precio: "$10.000",
        categoria: "Artículos de Limpieza",
      },
      {
        imagen: Termico,
        nombre: "Pantalón",
        precio: "$20.000",
        categoria: "Artículos de Limpieza",
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
        categoria: "Herramientas y Accesorios",
      },
      {
        imagen: Linterna,
        nombre: "Linterna",
        precio: "$10.000",
        categoria: "Herramientas y Accesorios",
      },
      {
        imagen: Mapa,
        nombre: "Mapa",
        precio: "$14.000",
        categoria: "Herramientas y Accesorios",
      },
      {
        imagen: Radio,
        nombre: "Radio",
        precio: "$32.000",
        categoria: "Herramientas y Accesorios",
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
        categoria: "Alimentos y Bebidas",
      },
      {
        imagen: Linterna,
        nombre: "Linterna",
        precio: "$10.000",
        categoria: "Alimentos y Bebidas",
      },
      {
        imagen: Mapa,
        nombre: "Mapa",
        precio: "$14.000",
        categoria: "Alimentos y Bebidas",
      },
      {
        imagen: Radio,
        nombre: "Radio",
        precio: "$32.000",
        categoria: "Alimentos y Bebidas",
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
        categoria: "Salud y Primeros Auxilios",
      },
      {
        imagen: Linterna,
        nombre: "Linterna",
        precio: "$10.000",
        categoria: "Salud y Primeros Auxilios",
      },
      {
        imagen: Mapa,
        nombre: "Mapa",
        precio: "$14.000",
        categoria: "Salud y Primeros Auxilios",
      },
      {
        imagen: Radio,
        nombre: "Radio",
        precio: "$32.000",
        categoria: "Salud y Primeros Auxilios",
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
        categoria: "Comunicación y Navegación",
      },
      {
        imagen: Linterna,
        nombre: "Linterna",
        precio: "$10.000",
        categoria: "Comunicación y Navegación",
      },
      {
        imagen: Mapa,
        nombre: "Mapa",
        precio: "$14.000",
        categoria: "Comunicación y Navegación",
      },
      {
        imagen: Radio,
        nombre: "Radio",
        precio: "$32.000",
        categoria: "Comunicación y Navegación",
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
        categoria: "Equipamiento para el Campo",
      },
      {
        imagen: Linterna,
        nombre: "Linterna",
        precio: "$10.000",
        categoria: "Equipamiento para el Campo",
      },
      {
        imagen: Mapa,
        nombre: "Mapa",
        precio: "$14.000",
        categoria: "Equipamiento para el Campo",
      },
      {
        imagen: Radio,
        nombre: "Radio",
        precio: "$32.000",
        categoria: "Equipamiento para el Campo",
      },
    ],
  },
];

function RelatedProducts({ setMostrarProducto }) {
  return (
    <>
      {categorias.map((categoria, index) => (
        <section className={categoria.clase} key={index}>
          <div className={categoria.subtitulo}>
            <h2>{categoria.titulo}</h2>
            <h3>{categoria.descripcion}</h3>
          </div>

          <div className="related-container">
            <div className="related-grid">
              {categoria.productos.map((producto, i) => (
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
      ))}
    </>
  );
}

export default RelatedProducts;