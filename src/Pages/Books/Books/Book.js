import React from "react";

const Book = ({ book, setChosenBook }) => {
  const {
    image,
    bookName,
    authorName,
    sellerLocation,
    resellPrice,
    originalPrice,
    yearsOfUse,
    dateOfPosting,
    sellerVerified,
    sold,
    sellerName,
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

          <p> Location: {sellerLocation}</p>
          <p> Seller Name: {sellerName} </p>
          <p>
            {" "}
            Seller verification status: {sellerVerified}{" "}
            {sellerVerified === "yes" && (
              <input
                type="checkbox"
                checked
                className="checkbox checkbox-info"
              />
            )}
            {(sellerVerified) === undefined && (
              <p  className=" text-red-600">Seller is not verified</p>
            )}
          </p>

          <div className="card-actions">
            <label
              onClick={() => setChosenBook(book)}
              htmlFor="booking-modal"
              className="btn btn-primary"
            >
              Book Now
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
