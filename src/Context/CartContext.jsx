import { useState, createContext, useEffect } from "react";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    const initialValue = JSON.parse(saved);
    return initialValue || [];

});
  console.log(cart);

  const [buyer, setBuyer] = useState({
    firstName:'',
    lastName:'',
    address:'',
    phone:'',
    email: ''
})

useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);

  const addItem = (productToAdd) => {
    if (!isInCart(productToAdd.id)) {
      setCart([...cart, productToAdd]);
    } else {
      const cartUpdated = cart.map((prod) => {
        if (prod.id === productToAdd.id) {
          const productUpdated = {
            ...prod,
            quantity: productToAdd.quantity,
          };
          return productUpdated;
        } else {
          return prod;
        }
      });

      setCart(cartUpdated);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const removeItem = (id) => {
    const newCartWithoutProduct = cart.filter((prod) => prod.id !== id);
    setCart(newCartWithoutProduct);
  };

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const getQuantity = () => {
    let accumulate = 0;

    cart.forEach((prod) => {
      accumulate += prod.quantity;
    });

    return accumulate;
  };

  const getProductQuantity = (id) => {
    const product = cart.find((prod) => prod.id === id);

    return product?.quantity;
  };

  const getTotal = () => {
    let accu = 0;

    cart.forEach((prod) => {
      accu += prod.quantity * prod.price;
    });

    return accu;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        isInCart,
        addItem,
        getQuantity,
        removeItem,
        getProductQuantity,
        getTotal,
        clearCart,
        buyer,
        setBuyer
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;