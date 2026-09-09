import "./Hero.css";
import carpa from "../../imagenes/carpa_grande.png";
import { FaWhatsapp } from "react-icons/fa";
function Hero() {
  const contactarWhatsApp = () => {
    const numero = "5491127726277";
    const mensaje =
      "Hola Buenas queria hacer una consulta de 𖥧 𝐌𝐢𝐧𝐢'𝐬 𝐌𝐨𝐮𝐧𝐭𝐚𝐢𝐧𝐬 𖥧";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };
  return (
    <>
      <section
        className="hero"
        style={{ backgroundImage: `url(${carpa})` }}
      >
        <div className="hero-overlay">
          <h1>
            Mini's
            <br />
            <span>Mountain</span>
          </h1>
          <p>
            ¡Tu próxima aventura empieza acá! Equipate con lo mejor para
            disfrutar de la libertad al aire libre, desde la cumbre más alta
            hasta el campamento junto al río. En nuestra tienda encontrarás
            tecnología, resistencia y comodidad para que tu única preocupación
            sea disfrutar del paisaje.
          </p>
          <button onClick={contactarWhatsApp}>
            <FaWhatsapp className="whatsapp-icon" />
            Contactanos
          </button>
        </div>
      </section>
      <div className="frase">
        <p>
          ¡Todo lo que necesitás para tu
          <span> próxima escapada </span>
          está a un clic!
        </p>
      </div>
    </>
  );
}
export default Hero;