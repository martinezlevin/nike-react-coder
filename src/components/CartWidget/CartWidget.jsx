import React from "react";
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import CartContext from "../../Context/CartContext";
import "../CartWidget/CartWidget.css"

const CartWidget = () => {
  
   const { getQuantity } = useContext(CartContext)

  const quantity = getQuantity()
  
  return (
   <Link to='/cart' className="cart-container">
      <span className="material-icons"><img onMouseOver="showCart(this)" class="cart mt-2" src="cart.png" alt="cart"></img></span>
      <p className="cart-number">{ quantity }</p>
    </Link>
  );
};

export default CartWidget;
