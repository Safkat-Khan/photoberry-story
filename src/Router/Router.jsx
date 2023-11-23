import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Details from "../Pages/Details/Details";
import PrivateRouteForOther from "./PrivateRouteForOther";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Gallery from "../Pages/Gallery/Gallery";
import Services from "../Pages/Services/Services";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        loader: () => fetch("/events.json"),
        element: <Home></Home>,
      },
      {
        path: "/services",
        loader: () => fetch("/events.json"),
        element: <Services></Services>
      },
      {
        path: "/login",
        loader: () => fetch("/images.json"),
        element: (
          <PrivateRoute>
            <Login></Login>
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        loader: () => fetch("/images.json"),
        element: (
          <PrivateRoute>
            <Register></Register>
          </PrivateRoute>
        ),
      },
      {
        path: "/contact",
        loader: () => fetch("/images.json"),
        element: (
          <PrivateRouteForOther>
           <ContactUs></ContactUs>
          </PrivateRouteForOther>
        ),
      },
      {
        path: "/gallery",
        loader: () => fetch("/gallery.json"),
        element: (
          <PrivateRouteForOther>
           <Gallery></Gallery>
          </PrivateRouteForOther>
        ),
      },
      {
        path: "/category/:id",
        loader: async ({ params }) => {
          const response = await fetch("/events.json");
          const data = await response.json();

          const category = data.find((event) => event.id == params.id);

          return category;
        },
        element: (
          <PrivateRouteForOther>
            <Details></Details>
          </PrivateRouteForOther>
        ),
      },
    ],
  },
]);


export default router