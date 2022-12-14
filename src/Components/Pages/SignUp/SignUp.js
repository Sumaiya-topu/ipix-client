import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Context/AuthProvider";
import toast from "react-hot-toast";
import useToken from "../../../hooks/useToken";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [signUpError, setSignUpError] = useState("");
  const { createUser, updateUser } = useContext(AuthContext);
  const [createdUserEmail, setcreatedUserEmail] = useState("");
  const [token] = useToken(createdUserEmail);
  const navigate = useNavigate();
  if (token) {
    navigate("/");
  }

  const handleSignUp = (data) => {
    setSignUpError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast("User Created successfully");

        const userInfo = {
          displayName: data.name,
          user_type: data.user_type,
        };

        updateUser(userInfo)
          .then(() => {
            saveUser(data.name, data.email, data.user_type);
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        console.error(error);
        setSignUpError(error.message);
      });
  };

  const saveUser = (name, email, user_type) => {
    const user = { name, email, user_type };
    fetch("https://ipix-server.vercel.app/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setcreatedUserEmail(email);
      });
  };

  return (
    <div className="h-[800px] flex justify-center items-center ">
      <div>
        <h1 className="text-4xl"> Sign UP</h1>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>

            <input
              {...register("email", { required: "Email Address is required" })}
              type="email"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-rose-600">{errors.email.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>

            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: " Password must be 6 character or longer",
                },
              })}
              type="password"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-rose-600">{errors.password.message}</p>
            )}
          </div>

          <label className="label inline-block">
            <span className="label-text">Choose Your Role :</span>
          </label>
          <select {...register("user_type")} className="inline-block">
            <option value="seller">Seller</option>
            <option value="buyer">Buyer</option>
          </select>

          <input
            type="submit"
            className=" btn btn-accent text-white w-full mt-5 "
          />
          {signUpError && <p className="text-rose-600">{signUpError}</p>}
          <p className="mt-2">
            Already have an account?{" "}
            <Link to="/login" className="text-success">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
