import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
  
    formState: { errors },
  } = useForm();


  //My handlelogin start

  const handleLogin = (data) => {

    console.log(data);

  }

  //My handlelogin End

  return (
    <div>
      <div className=" h-3/4 bg-base-200 flex justify-center items-center">
        <div>
          <h1 className="text-5xl font-bold py-10 text-center">Login now!</h1>
          {/* FORM START */}
          <form
            onSubmit={handleSubmit(handleLogin)}
            className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
          >
            <div className="card-body">
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
                    minLength: {value: 6, message: "You password must be at least 6 characters long"}
                  })}
                />
                {errors.password && (
                  <p className="text-red-600">{errors.password?.message}</p>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </div>
          </form>
          {/* FORM END */}

          {/* New Here? start */}
          <div className="bg-base-200 text-center font-bold">
            <p>
              New here?{" "}
              <Link to="/signup" className="text-red-600 ">
                Sign Up here
              </Link>
            </p>
          </div>
          {/* New Here? END */}
        </div>
      </div>
    </div>
  );
};

export default Login;
