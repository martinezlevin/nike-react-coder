import "./CartItem.css";
import { useContext } from "react";
import CartContext from "../../Context/CartContext";

const CartItem = ({ id, name, quantity, price }) => {
  const { removeItem } = useContext(CartContext);

  const handleRemove = (id) => {
    removeItem(id);
  };

  return (
    <div className="item-carrito">
      <div>
        <h2 className="item-nombre">{name}</h2>
      </div>
      <div className="cantidad-precio">
        <p className="info-item">Cantidad: {quantity}</p>
        <p className="info-item">Precio por Unidad: ${price}</p>
      </div>
      <div className="subtot-eliminar">
        <p className="info-item">Subtotal: ${price * quantity}</p>
        <button className="boton-eliminar" onClick={() => handleRemove(id)}>
        ✕
        </button>
      </div>
    </div>
  );
};

export default CartItem;
