import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<div>404, Route not found!</div>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
      ]
    },
  ]);

  export default router;