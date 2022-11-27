import React from "react";

const MyOrder = ({ booking }) => {
  const { productPhotoUrl, model_name, original_price, resale_price } = booking;
  return (
    <div className="card lg:card-side p-10 my-20 bg-base-100 shadow-lg rounded-sm">
      <figure>
        <img className="w-3/4" src={productPhotoUrl} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{model_name}</h2>
        <p>
          Original Price: {original_price} <br /> Resale: {resale_price}
        </p>
        <div className="card-actions justify-center ">
          <button className="btn btn-primary rounded-sm text-white">
            Make Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
