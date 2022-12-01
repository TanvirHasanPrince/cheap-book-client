import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext/AuthProvider";
import useAdmin from "../Hooks/useAdmin";
import Navbar from "../Navbar/Navbar";

const DashboardLayout = () => {
 
const url = `http://localhost:5000/users`;
  const { data: users = [], refetch } = useQuery({
    queryKey: ["user", 'admin'],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

    console.log(users);
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content ">
          <Outlet></Outlet>
          <label
            htmlFor="dashboard-drawer"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
        

            <li>
              <Link to="/dashboard">My Bookings</Link>
            </li>

            <li>
              <Link to="/dashboard/allusers">All Users</Link>{" "}
            </li>

            <li>
              <Link to="/dashboard/addaproduct">Add Books</Link>
            </li>
            <li>
              <Link to="/dashboard/mybooks">My Books</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
