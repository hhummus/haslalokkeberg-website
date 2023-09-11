import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./components/global/ErrorPage";
import ContactUs from "./pages/contactUs/ContactUs";
import Prices from "./pages/products/Prices";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    // bruk når man trykker på logo
  },
  {
    path: "om-oss",
    element: <AboutPage />,
    errorElement: <ErrorPage />,
    // bruk når man trykker på om oss
  },
  {
    path: "kontakt-oss",
    element: <ContactUs />,
    errorElement: <ErrorPage />,
    // bruk når man trykker på kontakt
  },
  {
    path: "prislister",
    element: <Prices />,
    errorElement: <ErrorPage />,
    // bruk når man trykker på prislister
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />/
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
