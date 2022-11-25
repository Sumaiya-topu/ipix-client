import React, { useEffect, useState } from "react";

import Category from "../../../Category/Category";
import "./Home.css";

const Home = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
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
    </div>
  );
};

export default Home;
