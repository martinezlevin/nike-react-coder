import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../Context/CartContext";

const Item = ({ id, name, image, description, price, stock }) => {
  const [quantityToAdd, setQuantityToAdd] = useState(0);

  const { addItem, getProductQuantity } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityToAdd(quantity);

    const productToAdd = { id, name, price, quantity };
    addItem(productToAdd);
  };

  const productQuantity = getProductQuantity(id);

  return (
    <div className="section-container">
      <div className="card-container">
        <div className="card">
          <img className="card-img-top" src={image} alt={name} />
          <div className="card-body">
            <h3 className="card-title">{name}</h3>
            <p className="card-text">{description}</p>
            <p className="precio">Precio: ${price}</p>
          </div>
        </div>
      </div>
      <div>
        {quantityToAdd === 0 ? (
          <ItemCount
            onAdd={handleOnAdd}
            stock={stock}
            initial={productQuantity}
          />
        ) : (
          <div>
            <div>
              <Link to="/cart" className="btn-agregar-carrito">
                Ver Carrito
              </Link>
            </div>

            <div className="div-return">
              <Link to="/" className="btn-agregar-volver">
                Volver
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Item;
