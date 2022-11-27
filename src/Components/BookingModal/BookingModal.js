import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Context/AuthContext/AuthProvider";

const BookingModal = ({ chosenBook, setChosenBook }) => {
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

  const { user } = useContext(AuthContext);

  //Handling Event Start

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const nameOfTheBook = form.bookName.value;
    const priceOfTheBook = form.bookPrice.value;
    const nameOftheBuyer = form.buyerName.value;
    const emailOftheBuyer = form.email.value;
    const phoneOftheBuyer = form.phone.value;
    const meetLocation = form.meetingLocation.value;

    console.log(
      nameOfTheBook,
      priceOfTheBook,
      nameOftheBuyer,
      emailOftheBuyer,
      phoneOftheBuyer,
      meetLocation
    );

    const bookingInformation = {
      bookName: nameOfTheBook,
      price: priceOfTheBook,
      buyerName: nameOftheBuyer,
      email: emailOftheBuyer,
      phone: phoneOftheBuyer,
      meetLocation: meetLocation,
    };

    //Sending data to server
    fetch(`http://localhost:5000/bookings`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingInformation),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setChosenBook(null);
          toast.success("Your booking has been submitted");
        }
      });

    console.log(bookingInformation);
  };
  //Handling Event End

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
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-3"
          >
            <input
              name="bookName"
              type="text"
              disabled
              value={bookName}
              placeholder="Book Name"
              className="input input-bordered input-primary w-full"
            />
            <input
              name="bookPrice"
              type="text"
              disabled
              value={resellPrice}
              placeholder="Price"
              className="input input-bordered input-primary w-full"
            />
            <input
              name="buyerName"
              type="text"
              defaultValue={user?.displayName}
              placeholder="Your Name"
              className="input input-bordered input-primary w-full"
            />
            <input
              name="email"
              type="text"
              disabled
              defaultValue={user?.email}
              placeholder="Email"
              className="input input-bordered input-primary w-full"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone number"
              className="input input-bordered input-primary w-full"
            />
            <p>Select Your location</p>
            <select className="select w-full " name="meetingLocation">
              <option value="dhaka">Dhaka</option>
              <option value="chittagong">Chittagong</option>
              <option value="khulna">Khulna</option>
              <option value="barishal">Barishal</option>
              <option value="sylhet">Sylhet</option>
              <option value="mymensingh">Mymensingh</option>
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
