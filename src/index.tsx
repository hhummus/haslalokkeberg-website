import * as React from "react";

import "./index.css";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {createBrowserRouter, RouterProvider}  from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./components/global/ErrorPage";
import ContactUs from "./pages/contactUs/ContactUs";
import Prices from "./pages/products/Prices";
import Portfolio from "./pages/portfolio/Portfolio";
import Kok from "./pages/portfolio/kok/Kok";
import NewMovements from "./pages/portfolio/new-movements/NewMovements";
import Ambijus from "./pages/portfolio/ambijus/Ambijus";
import CliffCabin from "./pages/portfolio/cliff-cabin/CliffCabin";
import Vinbaren from "./pages/portfolio/winebar-molla/Vinbaren";


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
  {
    path: "tidligere-arbeid",
    element: <Portfolio />,
    errorElement: <ErrorPage />,
    // bruk når man trykker på portfolio
  },
  {
    path: "tidligere-arbeid/kok",
    element: <Kok />,
    errorElement: <ErrorPage />
     // bruk når man trykker på portfolio -> KOK 
  },
  {
  path: "tidligere-arbeid/new-movements",
  element: <NewMovements />,
  errorElement: <ErrorPage />
   // bruk når man trykker på portfolio -> New movements  
  },
  {
    path: "tidligere-arbeid/ambijus",
    element: <Ambijus />,
    errorElement: <ErrorPage />
      // bruk når man trykker på portfolio -> Ambijus
  },
  {
    path: "tidligere-arbeid/cliff-cabin",
    element: <CliffCabin />,
    errorElement: <ErrorPage />
      // bruk når man trykker på portfolio -> Cliff Cabin 
  },
  {
    path: "tidligere-arbeid/vinbaren-pa-molla",
    element: <Vinbaren />,
    errorElement: <ErrorPage />
    // bruk når man trykker på portfolio -> Vinbaren
  }
]);



const rootElement = document.getElementById("root")
// specifying type of rootElement as html element. id root will always exist
const root = ReactDOM.createRoot(rootElement as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
