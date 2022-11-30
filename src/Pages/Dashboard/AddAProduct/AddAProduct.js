import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import {  useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthContext/AuthProvider";

const AddAProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {user} = useContext(AuthContext);
  console.log(user?.email)

  const navigate = useNavigate();

  const imageHostKey = process.env.REACT_APP_imgbb_key;


  const addBoook = (data) => {
    console.log(data);
    console.log(data.image[0]);
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
     method: 'POST',
     body: formData
    }).then(res => res.json()).then(imgData => {
     console.log(imgData);
     if(imgData.success) {
      console.log(imgData.data.url)
      const book = {
        bookName: data.bookName,
        authorName: data.authorName,
        sellerLocation: data.sellerLocation,
        resellPrice: data.resellPrice,
        originalPrice: data.originalPrice,
        yearsOfUse: data.yearsOfUse,
        sold:"Unsold",
        categoryName: data.categoryName,
        image: imgData.data.url,
        email: user?.email,
      };

      //Save Books to DB;
      fetch(`http://localhost:5000/books`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(book),
      })
        .then((res) => res.json())
        .then((result) => console.log(result));
        toast.success(`The book named "${data.bookName}" added successfully`);
        navigate('/dashboard/mybooks');
     }
    })
  };

  return (
    <div className="m-5">
      {/* FORM START */}
      <form
        onSubmit={handleSubmit(addBoook)}
        className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 m-auto"
      >
        <div className="card-body">
          {/* ******************************************************* */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name of the book</span>
            </label>
            <input
              className="input input-bordered"
              type="text"
              {...register("bookName", {
                required: "Please fill up this field",
              })}
            />

            
            
            
          </div>
          {/* ******************************************************* */}
          {/* ******************************************************* */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name of the Author</span>
            </label>
            <input
              className="input input-bordered"
              type="text"
              {...register("authorName", {
                required: "Please fill up this field",
              })}
            />
          </div>
          {/* ******************************************************* */}
          {/* ******************************************************* */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Location</span>
            </label>
            <input
              className="input input-bordered"
              type="text"
              {...register("sellerLocation", {
                required: "Please fill up this field",
              })}
            />
          </div>
          {/* ******************************************************* */}
          {/* ******************************************************* */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your asking price</span>
            </label>
            <input
              className="input input-bordered"
              type="text"
              {...register("resellPrice", {
                required: "Please fill up this field",
              })}
            />
          </div>
          {/* ******************************************************* */}
          {/* ******************************************************* */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Original Price</span>
            </label>
            <input
              className="input input-bordered"
              type="text"
              {...register("originalPrice", {
                required: "Please fill up this field",
              })}
            />
          </div>
          {/* ******************************************************* */}
          {/* ******************************************************* */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Years of use</span>
            </label>
            <input
              className="input input-bordered"
              type="text"
              {...register("yearsOfUse", {
                required: "Please fill up this field",
              })}
            />
          </div>
          {/* ******************************************************* */}

          <p>Please select a category</p>
          <select
            className="select select-bordered w-full max-w-xs"
            {...register("categoryName", {
              required: "Please select one",
            })}
          >
            <option defaultValue="" value="Fantasy">
              {" "}
              Fantasy
            </option>
            <option value="Fiction">Fiction</option>
            <option value="Adventure">Adventure</option>

            {errors.role && (
              <p className="text-red-600">{errors.role?.message}</p>
            )}
          </select>

          {/* ******************************************************* */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Upload an Image</span>
            </label>
            <input
              className="input input-bordered"
              type="file"
              {...register("image", {
                required: "Please fill up this field",
              })}
            />
            {errors.role && (
              <p className="text-red-600">{errors.role?.message}</p>
            )}
          </div>
          {/* ******************************************************* */}

          <div className="form-control mt-6">
            <button className="btn btn-primary">Add product</button>
          </div>
        </div>
      </form>
      {/* FORM END */}
    </div>
  );
};

export default AddAProduct;
