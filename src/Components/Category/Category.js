import React from "react";

const Category = (params) => {
  const { thumbnail, title } = params.category;
  return (
    <div className="card bg-white rounded-sm ">
      <figure className="px-10">
        <img src={thumbnail} alt="" className="rounded-xl h-3/4" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-4xl">{title}</h2>
      </div>
    </div>
  );
};

export default Category;
