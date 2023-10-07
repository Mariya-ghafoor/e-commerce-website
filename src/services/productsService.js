import { db } from "../../config/firestore";
import { collection, getDocs } from "firebase/firestore";

export const getFeaturedProducts = async () => {
  const collectionRef = collection(db, "products");

  const snapshot = await getDocs(collectionRef);
  const documents = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  const featuredProducts = documents.filter(
    (product) => product.isFeatured === true
  );
  return featuredProducts;
};
//............

export const getProductById = async (id) => {
  const collectionRef = collection(db, "products");

  const snapshot = await getDocs(collectionRef);
  const productById = snapshot.docs
    .map((doc) => ({ id: doc.id, ...doc.data() }))
    .filter((product) => product.id == id);

  return productById;
};

//............

export const getAllProducts = async () => {
  console.log("getting all products");
  //console.log("im querying db");
  //const collectionRef = collection(db, "products");
  //const snapshot = await getDocs(collectionRef);
  // snapshot.docs.forEach((doc) => console.log(doc.id, doc.data()));
  // const documents = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

  // console.log(documents);

  // const querySnapshot = await getDocs(collection(db, "products", "variants"));

  // querySnapshot.forEach((doc) => {
  //   // doc.data() is never undefined for query doc snapshots
  //   console.log(doc.id, " => ", doc.data());
  // });

  const collectionRef = collection(db, "products");

  const snapshot = await getDocs(collectionRef);
  const products = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

  // const shoe = documents.filter((doc) => doc.id === shoeSize);

  // const quantityAvailable = shoe[0].quantity;

  //console.log(quantityAvailable);
  console.log("got products ", products);

  return products;
};

//......
export const checkIfAvailable = async (productName, color, size) => {
  console.log("receieved in product service", productName);
  console.log("receieved in product service", color);
  console.log("receieved in product service", size);

  const collectionRef = collection(db, "products", productName, color);

  const snapshot = await getDocs(collectionRef);
  console.log("snapshot  ", snapshot);
  const AvailQuantity = snapshot.docs
    .map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    .filter((shoeSize) => shoeSize.id == size);

  console.log("Available quantity is: ", AvailQuantity[0].quantity);

  if (AvailQuantity[0].quantity > 0) {
    return true;
  } else return false;
};
