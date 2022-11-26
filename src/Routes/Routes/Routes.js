import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import BooksPage from "../../Pages/Books/Books/BooksPage";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";

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
       path: '/login', 
       element: <Login></Login>
      },
      {
       path: '/signpu', 
       element: <SignUp></SignUp>
      },
      {
       path: '/blog', 
       element: <Blog></Blog>
      },
      {
       path: '/books', 
       element: <BooksPage></BooksPage>
      }

    ],
  },
]);
