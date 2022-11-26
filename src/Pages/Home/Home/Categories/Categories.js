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
          <Link
            to={`/categories/${category.categoryName}`}
            className="text-center py-5 border-4 border-primary"
          >
            {category.categoryName}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
