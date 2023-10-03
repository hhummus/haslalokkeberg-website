import * as React from "react";
import "./index.css";
import * as ReactDOM from "react-dom/client";
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
        element: React.createElement(App, null),
        errorElement: React.createElement(ErrorPage, null),
        // bruk når man trykker på logo
    },
    {
        path: "om-oss",
        element: React.createElement(AboutPage, null),
        errorElement: React.createElement(ErrorPage, null),
        // bruk når man trykker på om oss
    },
    {
        path: "kontakt-oss",
        element: React.createElement(ContactUs, null),
        errorElement: React.createElement(ErrorPage, null),
        // bruk når man trykker på kontakt
    },
    {
        path: "prislister",
        element: React.createElement(Prices, null),
        errorElement: React.createElement(ErrorPage, null),
        // bruk når man trykker på prislister
    },
]);
const rootElement = document.getElementById("root");
// specifying type of rootElement as html element. id root will always exist
const root = ReactDOM.createRoot(rootElement);
root.render(React.createElement(React.StrictMode, null,
    React.createElement(RouterProvider, { router: router })));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
