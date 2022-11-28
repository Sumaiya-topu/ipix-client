import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Category from "../../../Category/Category";
import useSeller from "../../../../hooks/useSeller";
import "./Home.css";
import axios from "axios";
import AdvertiseSection from "../../../../Components/AdvertiseSection/AdvertiseSection";
import { AuthContext } from "../../../../Context/AuthProvider";
import Blackfriday from "../../../../assets/blackfriday.jpg";
const Home = () => {
  const { user } = useContext(AuthContext);
  const [isSeller] = useSeller(user?.email);

  const { data: categories = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axios.get("https://ipix-server.vercel.app/categories");
      //const data = await res.json();
      return res.data;
    },
  });

  return (
    <div>
      <div className="home ">
        <div className="banner flex flex-col justify-center align-middle">
          <h1 className="text-4xl text-white font-bold">
            i- <span className="text-rose-700">Pix</span>
          </h1>
          <h1 className="text-6xl text-white font-serif font-bold	">
            Quality Guaranteed{" "}
          </h1>
          {isSeller && (
            <div>
              <Link
                className="btn  btn-error rounded-sm text-white animate-bounce mt-10 w-48 h-12"
                to="/addproduct"
              >
                Post
              </Link>
            </div>
          )}
        </div>
      </div>
      <img className="mx-auto" src={Blackfriday} alt="" />
      <AdvertiseSection></AdvertiseSection>
      <div className="   mx-auto bg-base-300">
        <h1 className="text-4xl  p-10 font-serif	">
          Choose according to your taste
        </h1>
        <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {categories.map((category) => (
            <Category key={category._id} category={category}></Category>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
