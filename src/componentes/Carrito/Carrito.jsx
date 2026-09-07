import "./Carrito.css";
import Card_Carrito from "./Card_Carrito";
import {
    FiX,
} from "react-icons/fi";

import CarritoA from "../../imagenes/CarritoA.svg";


export default function Carrito({ setCarritoAbierto, carrito, setCarrito }) {

    return (
        <div className="carrito">
            <div className="header-carrito">
                <div className="carritoA">
                    <img src={CarritoA} alt="Carro" />
                </div>
                <div>
                    <h2>Tu carrito</h2>
                    <p>2 productos</p>
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
                    <p className="detalle">$80.000</p>
                </div>

                <div className="mini">
                    <span>Envio</span>
                    <p className="detalle2">Gratis</p>
                </div>

                <div className="lineaC"></div>


                <div className="mini2">
                    <span>Total</span>
                    <p className="detalle3">$80.000</p>
                </div>

                <div className="botones">
                    <button className="button-f">Finalizar compra</button>
                    <button className="button-s">Seguir comprando</button>
                </div>
            </div>
        </div>
    )
}