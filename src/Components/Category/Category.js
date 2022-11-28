import React from "react";
import { Link } from "react-router-dom";

const Category = (params) => {
  const { thumbnail, title, _id } = params.category;
  return (
    <div className="card bg-slate-100 w-3/4 mx-auto rounded-sm p-5 ">
      <figure className="">
        <img src={thumbnail} alt="" className="mt-5 rounded-full w-1/2" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-4xl">{title}</h2>
        <Link
          to={`/categories/${_id}/products`}
          className="btn btn-error text-white px-5 mt-2 rounded-sm"
        >
          View Product
        </Link>
      </div>
    </div>
  );
};

export default Category;
