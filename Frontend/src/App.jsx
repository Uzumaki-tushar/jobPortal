import React from "react";
import { Button } from "./components/ui/button";
import Navbar from "./components/components_lite/Navbar";
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import Home from "./components/components_lite/Home";

const appRouter = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
]);

const App = () => {
  return (
    <>
    <RouterProvider router={appRouter}>
    </RouterProvider>
    </>
  );
};

export default App;
