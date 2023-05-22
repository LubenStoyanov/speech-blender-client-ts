import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./routes/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Register from "./routes/authentication/Register";
import Login from "./routes/authentication/Login";
import Logout from "./routes/authentication/Logout";
import Error from "./routes/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/error",
    element: <Error />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <div>User already exits.</div>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
