import React from "react";
import { Button } from "./components/ui/button";
import Navbar from "./components/components_lite/Navbar";
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import Home from "./components/components_lite/Home";
import PrivacyPolicy from "./components/components_lite/PrivacyPolicy";
import TermsAndServices from "./components/components_lite/TermsOfServices";
import Jobs from "./components/components_lite/Jobs";

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
  {
    path:"/privacy-policy",
    element:<PrivacyPolicy/>
  },
  {
    path:"/terms-of-services",
    element:<TermsAndServices/>
  },{
    path:"/jobs",
    element:<Jobs/>
  }
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
