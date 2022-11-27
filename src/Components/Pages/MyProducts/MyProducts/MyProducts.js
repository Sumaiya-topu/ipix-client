import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../../Context/AuthProvider";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/myproducts?email=${user?.email}`;

  const { data: myProducts = [] } = useQuery({
    queryKey: ["myProducts", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      <h1 className="text-2xl my-5  lg:text-left font-bold">My Products</h1>
      {myProducts.map((myProduct) => (
        <p>{myProduct.model_name}</p>
      ))}
    </div>
  );
};

export default MyProducts;
