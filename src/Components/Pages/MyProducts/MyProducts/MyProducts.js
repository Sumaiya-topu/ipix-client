import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../../Context/AuthProvider";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const url = `https://ipix-server.vercel.app/myproducts?email=${user?.email}`;

  const { data: myProducts = [] } = useQuery({
    queryKey: ["myProducts", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      console.log(data);
      return data;
    },
  });

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th>Advertise</th>
              <th>Detele</th>
            </tr>
          </thead>
          <tbody>
            {myProducts.map((product, i) => (
              <tr key={product._id}>
                <th>{i + 1}</th>
                <td>{product.model_name}</td>
                <td>{product.original_price}</td>
                <td>
                  <button className="btn btn-xs btn-primary rounded-sm">
                    Advertise
                  </button>
                </td>
                <td>
                  <button className="btn btn-xs btn-error rounded-sm">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;
