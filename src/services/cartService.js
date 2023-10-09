import { db } from "../../config/firestore";

import { collection, doc, setDoc, getDocs } from "firebase/firestore";

export const addToCartInDb = async (productInCart) => {
  console.log(
    "^^^^^^^^^ In services. Receieved product to add in cart ",
    productInCart
  );

  // try {

  //Adding products in "Cart" document
  //   productInCart.map(async (product) => {
  //     console.log("mapping ", product);
  //     //Create a collection in "Cart" document with product index
  //     const colRef = collection(docRef, product.id);
  //     console.log("Got col ref", colRef);

  //     //Add documents in collection
  //     await setDoc(doc(colRef, product.name), {
  //       price: product.price,
  //       color: product.color,
  //       size: product.size,
  //     });
  //   });
  // } catch {
  //   (e) => console.log(e);
  // }

  //$$$
  const docRef = await doc(db, "products", "cart");

  //create a collection name with id+color+size
  const colRef = collection(
    docRef,
    productInCart.id + productInCart.color + productInCart.size
  );

  //Add documents in collection
  await setDoc(doc(colRef, productInCart.name), {
    price: productInCart.price,
    color: productInCart.color,
    size: productInCart.size,
    imageUrl: productInCart.imageUrl,
  });

  //$$$
};

export const getProductsFromCart = async () => {
  // console.log("Receieved ", productInCart);
  //let count = productInCart.length;
  //console.log("length of cart ", count);
  const count = 5;

  let products = [];

  // for (let index = 0; index < count; index++) {
  //   console.log("index= ", index);
  //   const collectionRef = collection(db, "products", "cart", index.toString());

  //   const snapshot = await getDocs(collectionRef);
  //   const documents = snapshot.docs
  //     .map((doc) => ({
  //       id: doc.id,
  //       ...doc.data(),
  //     }))
  //     .map((product) => {
  //       {
  //         console.log("Product ", product.id);
  //         products[index] = {
  //           name: product.id,
  //           color: product.color,
  //           size: product.size,
  //           price: product.price,
  //         };
  //         console.log("Products** ", products[index]);
  //       }
  //     });

  //   console.log("got docs ", typeof documents);

  //   products.push(documents);

  //   console.log("After adding docs to prodcut ", products);
  // }

  //$$$$
  const collectionRef = collection(db, "products");

  const snapshot = await getDocs(collectionRef);
  const documents = snapshot.docs
    .map((doc) => ({ id: doc.id, ...doc.data() }))
    .filter((doc) => doc.id === "cart");
  console.log("document in get cart ", documents);

  // const documents = snapshot.docs
  //   .map((doc) => ({
  //     id: doc.id,
  //     ...doc.data(),
  //   }))
  //   .map((product) => {
  //     {
  //       console.log("Product ", product.id);
  //       products[index] = {
  //         name: product.id,
  //         color: product.color,
  //         size: product.size,
  //         price: product.price,
  //       };
  //       console.log("Products** ", products[index]);
  //     }
  //   });

  //$$$$

  console.log("In cart service ,", products);
  return products;
};
