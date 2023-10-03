import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Donation from "../Pages/Donation";
import Statistics from "../Pages/Statistics";
import CardDetails from "../Cards/CardDetails";
import Error from "../Pages/Error";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoot from "./PrivateRoot";

const myRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    loader: () => fetch("../data.json"),
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/card-details/:id",
        element: <CardDetails></CardDetails>,
      },
      {
        path: "/donation",
        element: (
          <PrivateRoot>
            <Donation></Donation>
          </PrivateRoot>
        ),
      },
      {
        path: "/statistics",
        element: (
          <PrivateRoot>
            <Statistics></Statistics>
          </PrivateRoot>
        ),
      },
      {
        path: "*",
        element: <Error></Error>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
export default myRoute;
