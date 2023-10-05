import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/productsService";
import DisplayProductById from "../../components/displayProductById/displayProductById";

import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

function ProductPage() {
  const { id } = useParams();
  console.log("id receieved thru useParams ", id);
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProductById(id)
      .then((product) => {
        console.log("i received by getting product by Id ", product);
        setProduct(product[0]);
        console.log("the value of product is ", product);
      })
      .then(() => setIsLoading(false))
      .catch(() => console.log("Error while fetching product by Id"));
  }, [id]);
  return (
    <>
      {isLoading && <LoadingSpinner />}
      {product && <DisplayProductById product={product} />}
    </>
  );
}

export default ProductPage;
