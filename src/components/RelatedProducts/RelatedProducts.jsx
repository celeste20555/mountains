import "./RelatedProducts.css";
import ProductCard from "../ProductCard/ProductCard";
import Carpa from "../../imagenes/Carpa.png";
import Amaca_Paraguaya from "../../imagenes/Amaca_paraguaya.png";
import Bolsa_dedormir from "../../imagenes/Bolsa_dedormir.png";
import Silla_desplegable from "../../imagenes/Silla_desplegable.png";
import Campera from "../../imagenes/Campera.png"
import Bolsegos from"../../imagenes/Bolsegos.png"
import Gorra from"../../imagenes/Gorra.png"
import Termico from"../../imagenes/Termico.png"
import Panel from "../../imagenes/Panel.png"
import Linterna from "../../imagenes/Linterna.png"
import Mapa from "../../imagenes/Mapa.png"
import Radio from "../../imagenes/Radio.png"

function RelatedProducts() {
  return (
    <>
    <section className="related">
      <div className="subtitulos">
        <h2>Equipamiento para dormir</h2>
        <h3>Todo para que descanses en cualquier aventura</h3>
      </div>
      <div className="related-container">
        
        <div className="related-grid">
          <ProductCard
            imagen={Carpa}
            nombre="Carpa"
            precio="$30.000"
          />
          <ProductCard
            imagen={Amaca_Paraguaya}
            nombre="Amaca paraguaya"
            precio="$20.000"
          />
          
          <ProductCard
            imagen={Bolsa_dedormir}
            nombre="Bolsa de dormir"
            precio="$50.000"
          />
          
          <ProductCard
            imagen={Silla_desplegable}
            nombre="Silla desplegable"
            precio="$27.000"
          />

          
          
        </div>
        
        
        
      </div>
    </section>
     <section className="related2">
        <div className="subtitulos2">
          <h2>Ropa y protección</h2>
          <h3>Toda la comodidad y protecciones que podes encontrar</h3>
        </div>

        <div className="related-container">
          <div className="related-grid">
            <ProductCard
              imagen={Campera}
              nombre="Campera térmica"
              precio="$35.000"
            />

            <ProductCard
              imagen={Bolsegos}
              nombre="Bolsegos"
              precio="$33.000"
            />

            <ProductCard
              imagen={Gorra}
              nombre="Gorro térmico"
              precio="$10.000"
            />

            <ProductCard
              imagen={Termico}
              nombre="Pantalon Termico"
              precio="$20.000"
            />
          </div>
        </div>
      </section>
      <section className="related3">
        <div className="subtitulos3">
          <h2>Iluminacion y Energia</h2>
          <h3>Todo para protegerte de la oscuridad y frio</h3>
        </div>

        <div className="related-container">
          <div className="related-grid">
            <ProductCard
              imagen={Panel}
              nombre="Panel"
              precio="$32.000"
            />

            <ProductCard
              imagen={Linterna}
              nombre="Linterna"
              precio="$10.000"
            />

            <ProductCard
              imagen={Mapa}
              nombre="Mapas personalizados"
              precio="$14.000"
            />

            <ProductCard
              imagen={Radio}
              nombre="Radio"
              precio="$32.000"
            />
          </div>
        </div>
      </section>
      <section className="related4">
        <div className="subtitulos4">
          <h2>Utensilios de cocina</h2>
          <h3>Todo para protegerte de la oscuridad y frio</h3>
        </div>

        <div className="related-container">
          <div className="related-grid">
            <ProductCard
              imagen={Panel}
              nombre="Panel"
              precio="$32.000"
            />

            <ProductCard
              imagen={Linterna}
              nombre="Linterna"
              precio="$10.000"
            />

            <ProductCard
              imagen={Mapa}
              nombre="Mapas personalizados"
              precio="$14.000"
            />

            <ProductCard
              imagen={Radio}
              nombre="Radio"
              precio="$32.000"
            />
          </div>
        </div>
      </section>
      <section className="related5">
        <div className="subtitulos5">
          <h2>Articulos de limpieza</h2>
          <h3>Todo para protegerte de la oscuridad y frio</h3>
        </div>

        <div className="related-container">
          <div className="related-grid">
            <ProductCard
              imagen={Panel}
              nombre="Panel"
              precio="$32.000"
            />

            <ProductCard
              imagen={Linterna}
              nombre="Linterna"
              precio="$10.000"
            />

            <ProductCard
              imagen={Mapa}
              nombre="Mapas personalizados"
              precio="$14.000"
            />

            <ProductCard
              imagen={Radio}
              nombre="Radio"
              precio="$32.000"
            />
          </div>
        </div>
      </section>
      <section className="related6">
        <div className="subtitulos6">
          <h2>Herramienta y accesorios</h2>
          <h3>Todo para protegerte de la oscuridad y frio</h3>
        </div>

        <div className="related-container">
          <div className="related-grid">
            <ProductCard
              imagen={Panel}
              nombre="Panel"
              precio="$32.000"
            />

            <ProductCard
              imagen={Linterna}
              nombre="Linterna"
              precio="$10.000"
            />

            <ProductCard
              imagen={Mapa}
              nombre="Mapas personalizados"
              precio="$14.000"
            />

            <ProductCard
              imagen={Radio}
              nombre="Radio"
              precio="$32.000"
            />
          </div>
        </div>
      </section>
      <section className="related7">
        <div className="subtitulos7">
          <h2>Alimentos y bebidas</h2>
          <h3>Todo para protegerte de la oscuridad y frio</h3>
        </div>

        <div className="related-container">
          <div className="related-grid">
            <ProductCard
              imagen={Panel}
              nombre="Panel"
              precio="$32.000"
            />

            <ProductCard
              imagen={Linterna}
              nombre="Linterna"
              precio="$10.000"
            />

            <ProductCard
              imagen={Mapa}
              nombre="Mapas personalizados"
              precio="$14.000"
            />

            <ProductCard
              imagen={Radio}
              nombre="Radio"
              precio="$32.000"
            />
          </div>
        </div>
      </section>
      <section className="related8">
        <div className="subtitulos8">
          <h2>Salud y primeros auxilios</h2>
          <h3>Todo para protegerte de la oscuridad y frio</h3>
        </div>

        <div className="related-container">
          <div className="related-grid">
            <ProductCard
              imagen={Panel}
              nombre="Panel"
              precio="$32.000"
            />

            <ProductCard
              imagen={Linterna}
              nombre="Linterna"
              precio="$10.000"
            />

            <ProductCard
              imagen={Mapa}
              nombre="Mapas personalizados"
              precio="$14.000"
            />

            <ProductCard
              imagen={Radio}
              nombre="Radio"
              precio="$32.000"
            />
          </div>
        </div>
      </section>
      <section className="related9">
        <div className="subtitulos9">
          <h2>Comunicacion y navegacion</h2>
          <h3>Todo para protegerte de la oscuridad y frio</h3>
        </div>

        <div className="related-container">
          <div className="related-grid">
            <ProductCard
              imagen={Panel}
              nombre="Panel"
              precio="$32.000"
            />

            <ProductCard
              imagen={Linterna}
              nombre="Linterna"
              precio="$10.000"
            />

            <ProductCard
              imagen={Mapa}
              nombre="Mapas personalizados"
              precio="$14.000"
            />

            <ProductCard
              imagen={Radio}
              nombre="Radio"
              precio="$32.000"
            />
          </div>
        </div>
      </section>
      <section className="related10">
        <div className="subtitulos10">
          <h2>Equipamiento para campo</h2>
          <h3>Todo para protegerte de la oscuridad y frio</h3>
        </div>

        <div className="related-container">
          <div className="related-grid">
            <ProductCard
              imagen={Panel}
              nombre="Panel"
              precio="$32.000"
            />

            <ProductCard
              imagen={Linterna}
              nombre="Linterna"
              precio="$10.000"
            />

            <ProductCard
              imagen={Mapa}
              nombre="Mapas personalizados"
              precio="$14.000"
            />

            <ProductCard
              imagen={Radio}
              nombre="Radio"
              precio="$32.000"
            />
          </div>
        </div>
      </section>
    </>
    
    
    
    
  );
}
export default RelatedProducts;