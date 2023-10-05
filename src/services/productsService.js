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
  console.log("getting product by id ", id);
  const collectionRef = collection(db, "products");

  const snapshot = await getDocs(collectionRef);
  const productById = snapshot.docs
    .map((doc) => ({ id: doc.id, ...doc.data() }))
    .filter((product) => product.id == id);

  console.log("i got product ", productById);

  return productById;
};

//............

export const queryDatabase = async (shoeId, shoeColor, shoeSize) => {
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

  const collectionRef = collection(db, "products", shoeId, shoeColor);

  const snapshot = await getDocs(collectionRef);
  const documents = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

  const shoe = documents.filter((doc) => doc.id === shoeSize);

  const quantityAvailable = shoe[0].quantity;

  //console.log(quantityAvailable);

  return quantityAvailable;
};
