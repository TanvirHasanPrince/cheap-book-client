import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthContext/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(AuthContext);

  const url = `https://a12-server.vercel.app/bookings?email=${user?.email}`;

  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      <h3 className="text-3xl text-center text-primary font-bold py-10">
        My Orders
      </h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Order Number</th>
              <th>Book Name</th>
              <th>Price</th>
              <th>Payment status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, i) => (
              <tr>
                <th>{i + 1}</th>
                <td>{booking.bookName}</td>
                <td>{booking.price}</td>
                <td>Not Paid</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
