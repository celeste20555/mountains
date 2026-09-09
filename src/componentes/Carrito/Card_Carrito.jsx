import producto1C from "../../imagenes/Campera.png";
import Trash from "../../imagenes/Trash.svg";

export default function Card_Carrito({ producto, carrito, setCarrito }) {
    const aumentar = () => {
        setCarrito(
            carrito.map((item) => (
                item.nombre === producto.nombre
                    ? {
                        ...item,
                        cantidad:
                            item.cantidad < item.stock
                                ? item.cantidad + 1
                                : item.cantidad
                    }
                    : item
            ))
        );
    };

    const disminuir = () => {
        setCarrito(
            carrito.map((item) => (
                item.nombre === producto.nombre
                    ? {
                        ...item,
                        cantidad: item.cantidad > 1
                            ? item.cantidad - 1
                            : 1
                    }
                    : item
            ))
        );
    };

    const eliminar = () => {
        setCarrito(
            carrito.filter((item) => item.nombre !== producto.nombre)
        );
    }

    return (
        <div className="cardC">
            <div className="productoC">
                <img src={producto.imagen} alt={producto.nombre} />
            </div>
            <div className="infoCard">
                <h2>{producto.nombre}</h2>
                <div className="inferior">
                    <p>${producto.precio}</p>
                    <div className="funciones">
                        <button onClick={aumentar}>+</button>
                        <button>{producto.cantidad}</button>
                        <button onClick={disminuir}>-</button>
                        <img src={Trash} alt="" onClick={eliminar} />
                    </div>
                </div>
            </div>
        </div>
    )
}