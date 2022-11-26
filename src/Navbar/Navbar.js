import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext); //Getting the user to set conditional signout

  //Logout handle start

  const handleLogOut = () => {
    logOut().then (() => {
       toast.success("You have logged out");
    }).catch (err => console.log(err))
  }

  //Logout handle End

  // Nav Items declearing start

  const menuItems = (
    <React.Fragment>
      <li>
        <Link to="/">Home</Link>
      </li>
      {/* <li>
        <Link to="/categories/:id">Books</Link>
      </li> */}
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>{user?.uid && <Link to="/dashboard">Dashboard</Link>}</li>
    </React.Fragment>
  );

  //Nav Items declering End

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl">Cheap Books</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
        <div className="navbar-end">
          {user?.uid ? (
            <button onClick={handleLogOut} className="btn btn-secondary">
              Sign Out
            </button>
          ) : (
            <Link to="/login" className="btn btn-primary">
              Log In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
