import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../Context/AuthProvider";
import { async } from "@firebase/util";
import { data } from "autoprefixer";
import MyOrder from "./MyOrder";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const url = `https://ipix-server.vercel.app/bookings?email=${user?.email}`;

  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
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
      <h1 className="text-2xl my-5  lg:text-left font-bold">My Orders</h1>
      {bookings.map((booking) => (
        <MyOrder key={booking._id} booking={booking}></MyOrder>
      ))}
    </div>
  );
};

export default MyOrders;
