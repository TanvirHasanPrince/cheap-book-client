import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Book from "./Book";
import BookingModal from "../../../Components/BookingModal/BookingModal";

const BooksPage = () => {
  const books = useLoaderData();
  const [chosenBook, setChosenBook] = useState(null);

  // const {data: books = [],refetch,isLoading,
  // } = useQuery({
  //   queryKey: ["categories", ],
  //   queryFn: async () => {
  //     const res = await fetch(`https://a12-server.vercel.app/categories/${id}`);
  //     const data = await res.json();
  //     return data;
  //   },
  // });

  // const books = [
  //   {
  //     image:
  //       "https://static-01.daraz.com.bd/p/88c8fe011aa2683f66e43efe9922dafc.jpg",
  //     bookName: "Harry potter and the Prizoner of Azkaban",
  //     authorName: "JK Rowling",
  //     sellerLocation: "Dhaka",
  //     resellPrice: "500",
  //     originalPrice: "1000",
  //     yearsOfUse: 3,
  //     dateOfPosting: 2015,
  //     categoryId: 1,
  //     categoryName: "Fantasy",
  //   },

  //   {
  //     image:
  //       "https://static-01.daraz.com.bd/p/88c8fe011aa2683f66e43efe9922dafc.jpg",
  //     bookName: "Harry potter and the Prizoner of Azkaban",
  //     authorName: "JK Rowling",
  //     sellerLocation: "Dhaka",
  //     resellPrice: "500",
  //     originalPrice: "1000",
  //     yearsOfUse: 3,
  //     dateOfPosting: 2015,
  //     categoryId: 2,
  //     categoryName: "Fantasy",
  //   },

  //   {
  //     image:
  //       "https://static-01.daraz.com.bd/p/88c8fe011aa2683f66e43efe9922dafc.jpg",
  //     bookName: "Harry potter and the Prizoner of Azkaban",
  //     authorName: "JK Rowling",
  //     sellerLocation: "Dhaka",
  //     resellPrice: "500",
  //     originalPrice: "1000",
  //     yearsOfUse: 3,
  //     dateOfPosting: 2015,
  //     categoryId: 3,
  //     categoryName: "Fantasy",
  //   },
  // ];

  return (
    <div>
      <h3 className="text-center font-bold text-primary text-4xl">
        Books in this category
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:grid-cols-1 py-10">
        {books.map((book, i) => (
          <Book key={i} book={book} setChosenBook={setChosenBook}></Book>
        ))}
      </div>
      {chosenBook && (
        <BookingModal
          chosenBook={chosenBook}
          setChosenBook={setChosenBook}
        ></BookingModal>
      )}
    </div>
  );
};

export default BooksPage;
