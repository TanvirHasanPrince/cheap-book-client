import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthContext/AuthProvider";

const MyBooks = () => {
  const { user } = useContext(AuthContext);
  const url = `https://a12-server.vercel.app/books?email=${user?.email}`;

  const {
    data: books = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["books", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {});
      const data = await res.json();
      return data;
    },
  });
  refetch();
  const handleDeleteBook = (id) => {
    // const url = `https://a12-server.vercel.app/books/${id}`;
    // console.log(url);
    fetch(`https://a12-server.vercel.app/books/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success(`Your book deleted successfully`);
          refetch();
        }
      });
  };

  if (isLoading) {
    return <progress className="progress w-56"></progress>;
  }

  return (
    <div>
      <h3 className="text-3xl text-center text-primary font-bold py-10">
        My Books
      </h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Index</th>
              <th>Image</th>
              <th>Book Name</th>
              <th>Price</th>
              <th>Selling status</th>
              <th>Delete</th>
              <th>Advertise</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, i) => (
              <tr key={book._id}>
                <td>{i + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="w-20 rounded">
                      <img src={book.image} alt="" />
                    </div>
                  </div>
                </td>
                <td>{book.bookName}</td>
                <td>{book.resellPrice}</td>
                <td>{book.sold}</td>

                <td>
                  <Link
                    className="btn btn-xs btn-secondary"
                    onClick={() => handleDeleteBook(book._id)}
                  >
                    Delete
                  </Link>
                </td>
                <td>
                  <button className="btn btn-xs btn-primary">Advertise</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBooks;
<h3>I am by books</h3>;
