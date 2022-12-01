import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import BooksPage from "../../Pages/Books/Books/BooksPage";
import AddAProduct from "../../Pages/Dashboard/AddAProduct/AddAProduct";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import MyBooks from "../../Pages/Dashboard/MyBooks/MyBooks";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import Error from "../../Pages/Eroor/Error";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/categories/:id",
        element: (
          <PrivateRoute>
            <BooksPage></BooksPage>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://a12-server.vercel.app/categories/${params.id}`),
      },
    ],
  },

  {
    path: "/dashboard/",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/myorders",
        element: <MyOrders></MyOrders>,
      },
      {
        path: "/dashboard/allusers",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "/dashboard/addaproduct",
        element: <AddAProduct></AddAProduct>,
      },
      {
        path: "/dashboard/mybooks",
        element: <MyBooks></MyBooks>,
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);
