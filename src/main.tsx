import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./routes/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Register from "./routes/authentication/Register";
import Login from "./routes/authentication/Login";
import Logout from "./routes/authentication/Logout";
import Error from "./routes/Error";
import Profile from "./routes/Profile";
import AuthProvider from "./context/authContext";
import Protected from "./components/Protected";
import PodcastForm from "./routes/podcast/PodcastForm";
import Podcast from "./routes/podcast/Podcast";
import { loader as podcastsLoader } from "./api/loaders/getPodcasts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/error",
    element: <Error />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
  {
    path: "/:username/:tabName",
    element: (
      <Protected>
        <Profile />
      </Protected>
    ),
    loader: podcastsLoader,
  },
  {
    path: "/create/podcast",
    element: (
      <Protected>
        <PodcastForm />,
      </Protected>
    ),
  },
  {
    path: "/:username/:title/:id",
    element: (
      <Protected>
        <Podcast />,
      </Protected>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
  // </React.StrictMode>
);
