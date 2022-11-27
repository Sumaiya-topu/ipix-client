import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Category from "../../../Category/Category";
import "./Home.css";
import axios from "axios";

const Home = () => {
  const { data: categories = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/categories");
      //const data = await res.json();
      return res.data;
    },
  });

  return (
    <div>
      <div className="home relative ">
        <div className="banner flex flex-col justify-center align-middle">
          <h1 className="text-6xl text-white font-bold">i-Pix</h1>
          <h1 className="text-8xl text-white">Quality Guaranteed </h1>
        </div>
        <div className="absolute inset-x-0 top-96 w-3/4  mx-auto bg-base-300 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => (
            <Category key={category._id} category={category}></Category>
          ))}
        </div>
      </div>
      <div>
        <Link
          className="btn btn-outline animate-bounce w-48 h-12"
          to="/addproduct"
        >
          Post
        </Link>
      </div>
    </div>
  );
};

export default Home;
