import React from "react";

const Book = ({ book }) => {
  const {
    image,
    bookName,
    authorName,
    sellerLocation,
    resellPrice,
    originalPrice,
    yearsOfUse,
    dateOfPosting,

  } = book;

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{bookName}</h2>
          <p> Writtent by: {authorName}</p>
          <p>Selling price: BDT. {resellPrice}</p>
          <p>Buying price: BDT. {originalPrice}</p>
          <p>Buying year: {yearsOfUse}</p>
          <p> Posted on: {dateOfPosting}</p>
          <p> Location: {sellerLocation}</p>

          <div className="card-actions">
            <button className="btn btn-primary">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;