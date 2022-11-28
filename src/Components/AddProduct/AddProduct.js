import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Context/AuthProvider";

const AddProduct = () => {
  const { register, handleSubmit } = useForm();

  const { user } = useContext(AuthContext);
  console.log(user);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const handleSubmitProduct = (data) => {
    console.log(data);

    data = { ...data, seller_email: user.email };

    fetch(`http://localhost:5000/categories/${data.category_id}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Product Added SUccesfully");
        }
      });
  };
  return (
    <div className="drop-shadow-md border flex justify-center items-center pb-10 mt-10">
      <div>
        <h1 className="text-4xl my-5"> Add Your Product Info</h1>
        <form onSubmit={handleSubmit(handleSubmitProduct)}>
          <div>
            <label className="label inline-block">
              <span className="label-text">Choose Your Brand :</span>
            </label>
            <select {...register("category_id")} className="inline-block">
              <option selected disabled>
                Brand
              </option>
              {categories.map((category) => (
                <option value={category._id} key={category._id}>
                  {category.title}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="label inline-block">
              <span className="label-text">Your Product Condition</span>
            </label>
            <select {...register("condition")} className="inline-block">
              <option selected disabled>
                Condition
              </option>
              <option value="excellent">Excellent</option>
              <option value="good">Good</option>
              <option value="fair">Fair</option>
            </select>
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Model Name</span>
            </label>
            <input
              {...register("model_name", { required: true })}
              type="text"
              className="input input-bordered  "
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Product Image Url</span>
            </label>
            <input
              {...register("productPhotoUrl", { required: true })}
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control ">
            <label className="label">
              <span className="label-text">Original Price</span>
            </label>
            <input
              {...register("original_price", { required: true })}
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Resale Price</span>
            </label>
            <input
              {...register("resale_price", { required: true })}
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <input
              {...register("location", { required: true })}
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Year of purchase</span>
            </label>
            <input
              {...register("year_of_purchase", {
                required: "Password is required",
              })}
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Years of use</span>
            </label>
            <input
              {...register("years_of_use", {
                required: "Password is required",
              })}
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Mobile Number</span>
            </label>
            <input
              {...register("mobile_number", {
                required: "Password is required",
              })}
              type="number"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <input
            type="submit"
            className=" btn btn-accent text-white w-full mt-5 "
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
