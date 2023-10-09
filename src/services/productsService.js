import { db } from "../../config/firestore";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  setDoc,
  doc,
} from "firebase/firestore";

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
  const collectionRef = collection(db, "products");

  const snapshot = await getDocs(collectionRef);
  const products = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

  return products;
};

//......
export const checkIfAvailable = async (productName, color, size) => {
  const collectionRef = collection(db, "products", productName, color);

  const snapshot = await getDocs(collectionRef);

  const AvailQuantity = snapshot.docs
    .map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    .filter((shoeSize) => shoeSize.id == size);

  if (AvailQuantity[0].quantity > 0) {
    return true;
  } else return false;
};

//....

export const addToFavourites = async (productName) => {
  try {
    const docRef = doc(db, "products", productName);
    await updateDoc(docRef, {
      isFavourite: true,
    });
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};
