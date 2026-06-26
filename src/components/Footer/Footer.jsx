import "./Footer.css";
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-title">
        <div className="line"></div>
        <h3>
          Comunicate con nosotros en nuestras redes sociales
        </h3>
        <div className="line"></div>
      </div>
      <div className="footer-content">
        <div className="footer-item">
          <FaWhatsapp />
          <p>11 4566-7890</p>
        </div>
        <div className="footer-item">
          <FaInstagram />
          <p>mini's mountains</p>
        </div>
        <div className="footer-item">
          <FaFacebookF />
          <p>mini's mountains</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>mini's mountains 2025</p>
        <p>Equipo Profesor Delta</p>
      </div>
    </footer>
  );
}
export default Footer;