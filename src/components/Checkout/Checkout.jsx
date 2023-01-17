import { useState, useContext } from "react";
import CartContext from "../../Context/CartContext";
import { database } from "../../services/firebaseConfig";
import {
  addDoc,
  collection,
  getDocs,
  query,
  where,
  documentId,
  writeBatch,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Form from "../Form/Form";
import BeatLoader from "react-spinners/BeatLoader";

const Checkout = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [newOrder, setNewOrder] = useState();

  const { cart, getQuantity, getTotal, clearCart, buyer } =
    useContext(CartContext);

  const goBackHome = useNavigate();

  const totalQuantity = getQuantity();

  const total = getTotal();

  const createOrder = async () => {
    setIsLoading(true);

    try {
      const newOrder = {
        buyer,
        items: cart,
        totalQuantity,
        total,
        date: new Date(),
      };

      const ids = cart.map((prod) => prod.id);
      const productsRef = collection(database, "cocktails");

      const addedFromFirestore = await getDocs(
        query(productsRef, where(documentId(), "in", ids))
      );

      const { docs } = addedFromFirestore;
      const outOfStock = [];
      const batch = writeBatch(database);

      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDatabase = dataDoc.stock;
        const addedToCart = cart.find((prod) => prod.id === doc.id);
        const prodQuantity = addedToCart?.quantity;

        if (stockDatabase >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDatabase - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      });

      if (outOfStock.length === 0) {
        await batch.commit();

        const orderRef = collection(database, "orders");
        const orderAdded = await addDoc(orderRef, newOrder);

        console.log(`El codigo identificador de su pedido es: ${orderAdded.id}`);

        clearCart();
        setNewOrder(true);

        setTimeout(() => {
          goBackHome("/");
        }, 2000);
      } else {
        console.log("No hay stock");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <>
        <BeatLoader color="#0a06e2" size={30} />
      </>
    );
  }

  if (newOrder) {
    return <h2>¡Orden satisfactoriamente creada!</h2>;
  }

  return (
    <>
      <Form createOrder={createOrder} />
    </>
  );
};

export default Checkout;
