import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../../Context/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import useToken from "../../../hooks/useToken";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { signIn, providerLogin } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [token] = useToken(loginUserEmail);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.form?.pathname || "/";

  // Google Auth
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  if (token) {
    navigate(from, { replace: true });
  }

  const handleLogin = (data) => {
    console.log(data);
    setLoginError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setLoginUserEmail(data.email);
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
  };

  return (
    <div className="h-[800px] flex justify-center items-center ">
      <div>
        <h1 className="text-4xl"> Login</h1>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>

            <input
              type="email"
              {...register("email", { required: "Email Address is required" })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && <p role="alert">{errors.email?.message}</p>}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>

            <input
              type="password"
              {...register("password", {
                required: "Incorrect Password",
                minLength: {
                  value: 6,
                  message: " Password must be 6 character or longer",
                },
              })}
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <input
            type="submit"
            className=" btn btn-accent text-white w-full mt-5 "
          />
          {errors.password && <p role="alert">{errors.password?.message}</p>}

          <div>
            {loginError && <p className="text-rose-600">{loginError}</p>}
          </div>

          <p className="mt-2">
            Don't have account with us?{" "}
            <Link to="/signup" className="text-success">
              Create an account
            </Link>
          </p>
          <div className="divider">OR</div>
        </form>
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-outline btn-primary w-full"
        >
          Continue With Google <FcGoogle className="text-2xl ml-2"></FcGoogle>
        </button>
      </div>
    </div>
  );
};

export default Login;
