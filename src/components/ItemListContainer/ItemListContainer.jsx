import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getRopa } from "../../services/Firestore";
import { useAsync } from "../../Hooks/useAsync";
import BeatLoader from "react-spinners/BeatLoader";

const ItemListContainer = ({ saludo }) => {
  const { categoryId } = useParams();

  const getRopaFromFirestore = () => getRopa(categoryId);

  const { data, error, isLoading } = useAsync(getRopaFromFirestore, [
    categoryId,
  ]);

  if (isLoading) {
    return (
      <>
        <BeatLoader color="#e8ebf3" size={50} />
      </>
    );
  }

  if (error) {
    return <h1>Hubo un error</h1>;
  }

  if (data.length === 0) {
    return categoryId ? (
      <h1>No hay productos en la categoría {categoryId}</h1>
    ) : (
      <h1>No hay productos disponibles</h1>
    );
  }

  return (
    <>
      <h2>{saludo}</h2>
      <div>
        <ItemList products={data} />
      </div>
    </>
  );
};

export default ItemListContainer;
