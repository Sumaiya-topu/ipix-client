import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookingModal from "../../BookingModal/BookingModal";
import Product from "./Product";

const Products = () => {
  const params = useParams();
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState(null);
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
      <div>
        {products.map((product) => (
          <Product
            key={product._id}
            product={product}
            setOrder={setOrder}
          ></Product>
        ))}
      </div>
      {order && <BookingModal order={order} setOrder={setOrder}></BookingModal>}
    </div>
  );
};

export default Products;
