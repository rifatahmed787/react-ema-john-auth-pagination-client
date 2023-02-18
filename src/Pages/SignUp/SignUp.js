import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import SmallSpinner from "../../components/Spinner/SmallSpinner";
import { AuthContext } from "../../contexts/UserContext";
import "./SignUp.css";

const SignUp = () => {
  const { SignUp, updateUser, SignOut, loading } = useContext(AuthContext);
  const [error, setError] = useState("");
  //   const [createdUserEmail, setCreatedUserEmail] = useState("");
  // const [token] = useToken(createdUserEmail);
  const navigate = useNavigate();

  // if (token) {
  //   navigate("/");
  // }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignup = (data) => {
    setError("");
    SignUp(data.email, data.password)
      .then((result) => {
        const user = result.user;

        console.log(user);
        const userInfo = {
          displayName: data.name,
        };

        updateUser(userInfo)
          .then(() => {})
          .catch((error) => console.error(error));
        SignOut()
          .then(() => {
            toast.success("Registered successfully. Please login...");
            navigate("/login");
          })
          .then(() => {});
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mt-20  mx-auto lg:w-1/3 md:w-2/5 sm:w-11/12">
      <div className=" small-width bg-[#F3F4F6] dark:bg-black dark:border p-7 shadow-2xl border border-orange-400 rounded-xl">
        <h2 className="text-2xl font-bold text-orange-500 text-center dark:text-white">
          Sign up
        </h2>
        <form onSubmit={handleSubmit(handleSignup)}>
          <div className="form-control ">
            <label className="label">
              <span className="label-text dark:text-white">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Full Name"
              {...register("name", { required: "Name is required" })}
              className="input input-bordered bg-orange-100 dark:bg-black dark:text-white dark:border-white"
              style={{ fontSize: "14px", height: "50px" }}
            />
          </div>

          <div className="form-control ">
            <label className="label">
              <span className="label-text dark:text-white">Email</span>
            </label>
            <input
              type="Email"
              placeholder="Email"
              {...register("email", { required: "Email is required" })}
              className="input text-sm input-bordered bg-orange-100  dark:bg-black dark:text-white dark:border-white"
              style={{ fontSize: "14px", height: "50px" }}
            />
            {errors.email && (
              <p className="text-red-600" role="alert">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text dark:text-white">Password</span>
            </label>
            <input
              type="password"
              placeholder="******"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters or more",
                },
                pattern: {
                  value:
                    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                  message:
                    "Password must have a number and a special character",
                },
              })}
              className="input text-sm input-bordered bg-orange-100  dark:bg-black dark:text-white dark:border-white"
              style={{ fontSize: "20px", height: "50px" }}
            />
            {errors.password && (
              <p className="text-red-600" role="alert">
                {errors.password?.message}
              </p>
            )}
          </div>

          {loading ? (
            <button className="btn  bg-orange-500 hover:bg-orange-500 w-full mt-5 border-none">
              <SmallSpinner />
            </button>
          ) : (
            <input
              className="btn  bg-orange-500 hover:bg-orange-500 w-full mt-5 border-none"
              value="Sign up"
              type="submit"
            />
          )}

          <div>{setError && <p className="text-red-600">{error}</p>}</div>
        </form>
        <p className="mt-5 dark:text-white">
          Already have an account{" "}
          <Link className="text-black dark:text-primary link" to="/login">
            Please Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
