import { getDocs, collection, query, where } from "firebase/firestore";
import { database } from "../services/firebaseConfig";

export const getRopa = (categoryId) => {
    const collectionRef = !categoryId
      ? collection(database, "products")
      : query(
          collection(database, "products"),
          where("category", "==", categoryId)
        );

    return getDocs(collectionRef)
      .then((response) => {
        console.log(response);
        const productsAdapted = response.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        return productsAdapted;
      })
      .catch((error) => {
        return error;
      });
};
