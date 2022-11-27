import React from "react";

const BookingModal = ({ chosenBook }) => {
  const {
    image,
    bookName,
    authorName,
    sellerLocation,
    resellPrice,
    originalPrice,
    yearsOfUse,
    dateOfPosting,
  } = chosenBook;
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{bookName}</h3>
          {/* Starting of FORM */}
          <form className="grid grid-cols-1 gap-3 mt-3">
            <input
              type="text"
              placeholder="Book Name"
              className="input input-bordered input-primary w-full"
            />
            <input
              type="text"
              placeholder="Price"
              className="input input-bordered input-primary w-full"
            />
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered input-primary w-full"
            />
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered input-primary w-full"
            />
            <input
              type="text"
              placeholder="Phone number"
              className="input input-bordered input-primary w-full"
            />
            <select className="select w-full ">
              <option disabled selected>
                Pick your meeting location
              </option>
              <option>Dhaka</option>
              <option>Chittagong</option>
              <option>Khulna</option>
              <option>Barishal</option>
              <option>Sylhet</option>
              <option>Mymensingh</option>
            </select>

            <input
              type="submit"
              value="Submit"
              className="btn btn-accent w-full"
            />
          </form>
          {/* Ending of FORM */}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
