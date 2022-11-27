import React from "react";

const Product = ({ product, setOrder }) => {
  const {
    model_name,
    condition,
    location,
    mobile_number,
    original_price,
    posted_on,
    productPhotoUrl,
    resale_price,
    seller_email,
    sold,
    year_of_purchase,
    years_of_use,
  } = product;
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content w-3/4 flex-col lg:flex-row-reverse">
          <img
            src={productPhotoUrl}
            className="max-w-sm rounded-sm shadow-2xl"
            alt=""
          />

          <div>
            <h1 className="text-5xl font-bold">{model_name}</h1>
            <p className="mt-3">{posted_on}</p>
            <p className="pt-6">Product Condition : {condition}</p>
            <p className="">
              Bought : in {year_of_purchase} || Use : {years_of_use}
            </p>
            <p className="">Original price {original_price}</p>
            <p className="">Resale Price : {resale_price}</p>
            <p className="">Location : {location}</p>

            <p className="">Contact for query : {mobile_number}</p>
            <p className="">Email for information : {seller_email}</p>

            <label
              onClick={() => setOrder(product)}
              htmlFor="booking-modal"
              className=" btn btn-primary text-white rounded-sm mt-5"
            >
              Order Now
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
