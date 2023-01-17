import "./Cart.css";
import { useContext } from "react";
import CartContext from "../../Context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart, getQuantity, getTotal } = useContext(CartContext);

  const totalQuantity = getQuantity();
  const total = getTotal();

  if (totalQuantity === 0) {
    return (
      <p className="nada-carrito">
        <h1>Tu carrito está vacío</h1>
        <h3>¿No sabes qué comprar?</h3>
        <h3>¡Cientos de productos te esperan!</h3>
      </p>
    );
  }

  return (
    <div>
      <h1 className="tituloColor">Carrito de Compras</h1>
      {cart.map((p) => (
        <CartItem key={p.id} {...p} />
      ))}
      <h3 className="totalColor">Total: ${total}</h3>
      <Link to="/checkout" className="boton-carrito uno">
        Finalizar compra
      </Link>
      <button onClick={() => clearCart()} className="boton-carrito dos">
        Limpiar carrito
      </button>
      <Link to="/" className="boton-carrito tres">
        Seguir comprando
      </Link>
    </div>
  );
};

export default Cart;