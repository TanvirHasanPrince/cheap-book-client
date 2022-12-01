import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Context/AuthContext/AuthProvider";
import toast from "react-hot-toast";
import { updateCurrentUser } from "firebase/auth";
import useToken from "../../Hooks/useToken";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser, handleGoogleSignIn } = useContext(AuthContext); //Getting the things form context

  const [signUpError, setSignUpError] = useState("");
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [token] = useToken(createdUserEmail);
  const navigate = useNavigate();

  //My handleSignUP start

  if (token) {
    navigate("/");
  }

  const handleSignUp = (data) => {
    console.log(data);
    setSignUpError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        toast.success("User Created successfully");
        saveUser(data.name, data.email, data.role);

        const userInfo = {
          displayName: data.name,
        };
        updateCurrentUser(userInfo)
          .then(() => {})
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        console.log(error);
        setSignUpError(error.message);
      });
  };

  //Start:For sending user to DB

  const saveUser = (name, email, role) => {
    const user = { name, email, role };
    fetch("https://a12-server.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        // getUserToken(email);
        setCreatedUserEmail(email);
      });
  };
  //End :For sending user to DB

  // Start: JWT
  // const getUserToken = email => {
  //   fetch(`https://a12-server.vercel.app/jwt?email=${email}`).then(res => res.json()).then(data => {
  //     if (data.accessToken) {
  //       localStorage.setItem('accessToken', data.accessToken);
  //       navigate("/");
  //     }
  //   })
  // }
  //End: JWT

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
          <div className="bg-base-200 text-center font-bold">
            <button onClick={handleGoogleSignIn} className="btn btn-primary">
              Sign Up with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
