import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import ErrorPage from "./components/errorPage";
import Lobby from "./components/Lobby";
import Interface from "./components/Interface";
import A from "./components/puzzleRooms/A";
import B from "./components/puzzleRooms/B";
import C from "./components/puzzleRooms/C";
import D from "./components/puzzleRooms/D";
import E from "./components/puzzleRooms/E";
import Info from "./components/Info";
import LandingPage from "./components/LandingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/puzzle",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/puzzle/lobby",
        element: <Lobby />,
      },
      {
        path: "/puzzle/a",
        element: <A />,
      },
      {
        path: "/puzzle/b",
        element: <B />,
      },
      {
        path: "/puzzle/c",
        element: <C />,
      },
      {
        path: "/puzzle/d",
        element: <D />,
      },
      {
        path: "/puzzle/e",
        element: <E />,
      },
    ],
  },
  {
    path: "/interface",
    element: <Interface />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
