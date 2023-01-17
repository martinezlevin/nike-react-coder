import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getDoc, doc } from "firebase/firestore";
import { database } from "../../services/firebaseConfig";
import BeatLoader from "react-spinners/BeatLoader";

const ItemDetailContainer = () => {
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);

  const { productsId } = useParams();

  useEffect(() => {
    getDoc(doc(database, "products", productsId))
      .then((response) => {
        const data = response.data();
        const productsAdapted = { id: response.id, ...data };
        setProducts(productsAdapted);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [productsId]);

  if (loading) {
    return (
      <>
        <BeatLoader color="#e8ebf3" size={50} />
      </>
    );
  }

  return (
    <div>
      <h2>{products?.name}</h2>
      <ItemDetail {...products} />
    </div>
  );
};

export default ItemDetailContainer;
