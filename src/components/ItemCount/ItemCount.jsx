import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="counter-total">
      <div className="counter-arriba">
        <div className="btn-menos">
          <button className="btn-masmenos" onClick={decrement}>
            -
          </button>
        </div>
        <div className="numero">
          <p className="numerocounter">{count}</p>
        </div>
        <div className="btn-mas">
          <button className="btn-masmenos" onClick={increment}>
            +
          </button>
        </div>
      </div>
      <div className="btn-container">
        <button className="btn-agregar-al-carrito" onClick={() => onAdd(count)}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
