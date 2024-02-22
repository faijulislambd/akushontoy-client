import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.scss";
import Main from "./layout/Main";
import Home from "./components/pages/Home/Home";
import AuthProvider from "../Providers/AuthProvider";
import Toys from "./components/pages/Toys/Toys";
import Blog from "./components/pages/Blog/Blog";
import Login from "./components/pages/LoginRegisterPages/Login";
import Register from "./components/pages/LoginRegisterPages/Register";
import AddNewToy from "./components/pages/AddNewToy/AddNewToy";
import PrivateRoute from "./routes/PrivateRoute";
import MyToys from "./components/pages/MyToys/MyToys";
import ToyDetail from "./components/pages/ToyDetail/ToyDetail";
import "sweetalert2/src/sweetalert2.scss";
import NotFound from "./components/pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/toys",
        element: <Toys></Toys>,
        loader: () => {
          return fetch("http://localhost:5000/toys");
        },
      },
      {
        path: "/toy/:id",
        element: (
          <PrivateRoute>
            <ToyDetail></ToyDetail>
          </PrivateRoute>
        ),
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/toy/${params.id}`);
        },
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/add-toy",
        element: (
          <PrivateRoute>
            <AddNewToy></AddNewToy>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-toys",
        element: (
          <PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
