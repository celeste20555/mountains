import "./Carrito.css";
import Card_Carrito from "./Card_Carrito";
import {
    FiX,
} from "react-icons/fi";

import CarritoA from "../../imagenes/CarritoA.svg";


export default function Carrito({ setCarritoAbierto, carrito, setCarrito }) {

    const subtotal = carrito.reduce((total, producto) => {
        return total + producto.precio * producto.cantidad;
    }, 0);

    const subtotalFormateado = subtotal.toLocaleString("es-AR");

    return (
        <div className="carrito">
            <div className="header-carrito">
                <div className="carritoA">
                    <img src={CarritoA} alt="Carro" />
                </div>
                <div>
                    <h2>Tu carrito</h2>
                    <p>{carrito.reduce((total, producto) => total + producto.cantidad, 0)} productos</p>
                </div>

                <FiX
                    className="cerrar-carrito"
                    onClick={() => setCarritoAbierto(false)}
                />
            </div>

            <div className="lineaC"></div>

            <div className="Lista-cards">
                {carrito.map((producto, index) => (
                    <div key={index}>
                        <Card_Carrito
                            producto={producto}
                            carrito={carrito}
                            setCarrito={setCarrito}
                        />

                        <div className="lineaC"></div>
                    </div>
                ))}
            </div>

            <div className="carrito-resumen">
                <div className="mini">
                    <span>SubTotal</span>
                    <p className="detalle">${subtotalFormateado}</p>
                </div>

                <div className="mini">
                    <span>Envio</span>
                    <p className="detalle2">Gratis</p>
                </div>

                <div className="lineaC"></div>


                <div className="mini2">
                    <span>Total</span>
                    <p className="detalle3">${subtotalFormateado}</p>
                </div>

                <div className="botones">
                    <button className="button-f">Finalizar compra</button>
                    <button className="button-s">Seguir comprando</button>
                </div>
            </div>
        </div>
    )
}