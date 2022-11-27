import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";
const Products = () => {
  const params = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/categories/${params.id}/products`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, [params.id]);

  return (
    <div>
      {products.map((product) => (
        <Product key={product._id} product={product}></Product>
      ))}
    </div>
  );
};

export default Products;
