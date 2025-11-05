import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Services from "../pages/Services";
import ErrorPage from "../pages/ErrorPage";
import ProtectedRoute from "../provider/ProtectedRoute";
import ServiceDetails from "../pages/ServiceDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "/service/:id",
        element: (
          <ProtectedRoute>
            <ServiceDetails />
          </ProtectedRoute>
        ),
        loader: () => fetch("/services.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/services",
        element: <Services />,
      },
    ],
  },
  // {
  //   path: "/auth",
  //   element: <AuthLayout></AuthLayout>,
  //   children: [
  //     {
  //       path: "/auth/login",
  //       element: <Login></Login>,
  //     },
  //     {
  //       path: "/auth/register",
  //       element: <Register></Register>,
  //     },
  //   ],
  // },
  // {
  //   path: "/news-details/:id",
  //   element: (
  //     <PrivateRoute>
  //       <NewsDetails></NewsDetails>
  //     </PrivateRoute>
  //   ),
  //   loader: () => fetch("/news.json"),
  // },
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
