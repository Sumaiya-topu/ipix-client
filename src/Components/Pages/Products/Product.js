import React from "react";

const Product = (params) => {
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
  } = params.product;
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={productPhotoUrl}
            className="max-w-sm rounded-lg shadow-2xl"
            alt=""
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
