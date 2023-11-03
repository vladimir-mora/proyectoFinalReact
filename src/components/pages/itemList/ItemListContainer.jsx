import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import SkeletonCardLoader from "../../common/skeleton/skeleton";
import { getDocs, collection, query, where } from "firebase/firestore";
import { dataBase } from "../../../firebase";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    let productsCollection = collection(dataBase, "products");

    let consulta = undefined;

    if (!categoryName) {
      consulta = productsCollection;
    } else {
      consulta = query(
        productsCollection,
        where("category", "==", categoryName)
      );
    }

    getDocs(consulta).then((res) => {
      let newArray = res.docs.map((product) => {
        return { ...product.data(), id: product.id };
      });
      setItems(newArray);
    });
  }, [categoryName]);

  return (
    <>
      {items.length === 0 ? <SkeletonCardLoader /> : <ItemList items={items} />}
      ;
    </>
  );
};

export default ItemListContainer;
