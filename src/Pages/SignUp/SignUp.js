import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Context/AuthContext/AuthProvider";
import toast from "react-hot-toast";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser } = useContext(AuthContext); //Getting the things form context

  const [signUpError, setSignUpError] = useState('')

  //My handleSignUP start

  const handleSignUp = (data) => {
    console.log(data);
    setSignUpError('');
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast('User Created successfully')
      
      
      })
      .catch((error) => {
        console.log(error);
        setSignUpError(error.message);
      });
  };

  //My handleSignUP End
  return (
    <div>
      <div className=" h-3/4 bg-base-200 flex justify-center items-center">
        <div>
          <h1 className="text-5xl font-bold py-10 text-center">Sign Up!</h1>
          {/* FORM START */}
          <form
            onSubmit={handleSubmit(handleSignUp)}
            className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
          >
            <div className="card-body">
              {/* NAME START */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                {/* register your input into the hook by invoking the "register" function */}
                <input
                  className="input input-bordered"
                  type="text"
                  {...register("name", {
                    required: "Please fill up this field",
                  })}
                />
                {errors.name && (
                  <p className="text-red-600">{errors.name?.message}</p>
                )}
              </div>

              {/* NAME END  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                {/* register your input into the hook by invoking the "register" function */}
                <input
                  className="input input-bordered"
                  type="email"
                  {...register("email", {
                    required: "Please enter a valid email",
                  })}
                />
                {errors.email && (
                  <p className="text-red-600">{errors.email?.message}</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                {/* register your input into the hook by invoking the "register" function */}
                <input
                  className="input input-bordered"
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message:
                        "You password must be at least 6 characters long",
                    },
                  })}
                />
                {errors.password && (
                  <p className="text-red-600">{errors.password?.message}</p>
                )}
              </div>

              {/* Seller/Buyer Start */}

              <select
                className="select select-bordered w-full max-w-xs"
                {...register("role", {
                  required: "Please select one",
                })}
              >
                <option defaultValue="" value="buyer">
                  Buyer
                </option>
                <option value="seller">Seller</option>
                {errors.role && (
                  <p className="text-red-600">{errors.role?.message}</p>
                )}
              </select>

              {/* Seller/Buyer End */}
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </div>
          </form>
          {/* FORM END */}

          {/* New Here? start */}
          <div className="bg-base-200 text-center font-bold">
            <p>
              Already have an account? ?{" "}
              <Link to="/login" className="text-red-600 ">
                Login here
              </Link>
            </p>
          </div>
          {/* New Here? END */}
          {signUpError && <p className="text-red-600"> {signUpError}</p>}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
