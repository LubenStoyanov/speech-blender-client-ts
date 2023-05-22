import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./routes/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Register from "./routes/authentication/Register";
import registerAction from "./routes/authentication/actions/register";
import Login from "./routes/authentication/Login";
import loginAction from "./routes/authentication/actions/login";
import Logout from "./routes/authentication/Logout";
import logoutAction from "./routes/authentication/actions/logout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <div>User already exits.</div>,
    action: registerAction,
  },
  {
    path: "/login",
    element: <Login />,
    action: loginAction,
  },
  {
    path: "/logout",
    element: <Logout />,
    action: logoutAction,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
