import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Context/AuthContext/AuthProvider";
import toast from "react-hot-toast";
import useToken from "../../Hooks/useToken";

const Login = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const [loginError, setLoginError] = useState("");

  const { signIn } = useContext(AuthContext); // using the SignIn function from Authcontext
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [token] = useToken(loginUserEmail);

  //Using privateRoute
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";
  //My handlelogin start

  if(token) {
     navigate(from, { replace: true });
  }

  const handleLogin = (data) => {
    setLoginError("");
    console.log(data);
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        toast.success("You have logged in");
        console.log(user);
        setLoginUserEmail(data.email);
   
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
  };

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
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>

              {loginError && <p className="text-red-700">{loginError}</p>}
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
