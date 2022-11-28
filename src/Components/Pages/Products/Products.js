import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import BookingModal from "../../BookingModal/BookingModal";
import Product from "./Product";
import axios from "axios";

const Products = () => {
  const params = useParams();
  const [order, setOrder] = useState(null);

  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axios.get(
        `https://ipix-server.vercel.app/categories/${params.id}/products`
      );
      //const data = await res.json();
      return res.data;
    },
  });

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
