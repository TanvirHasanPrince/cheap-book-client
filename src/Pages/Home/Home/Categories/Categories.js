import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";



const Categories = () => {
  const {data: categories = [],refetch,isLoading,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/categories`);
      const data = await res.json();
      return data;
    },
  });

  console.log(categories);

  return (
    <div>
      <h1 className="text-5xl text-primary text-center font-bold py-10">
        Categories
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:grid-cols-1 py-10">
        {categories.map((category) => (
          <>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
              <figure>
                <img className=" image-full" src={category.bg} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title"> {category.categoryName}</h2>

                <div className="card-actions justify-end">
                  <Link
                    to={`/categories/${category.categoryName}`}
                    className="btn btn-primary"
                  >
                    {category.categoryName}
                  </Link>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Categories;
