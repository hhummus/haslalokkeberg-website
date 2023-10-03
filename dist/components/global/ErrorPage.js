import React from "react";
import { useRouteError } from "react-router-dom";
import "../../css/errorPage.css";
export default function ErrorPage() {
    const checkError = useRouteError();
    console.error(checkError);
    return (React.createElement("div", { id: "error-page" },
        React.createElement("div", { className: "container" },
            React.createElement("h1", { className: "errorTitle" }, "Something went wrong. "),
            React.createElement("p", { className: "errorP" }, "An unexpected error has occurred."),
            React.createElement("p", { className: "errorStatus" },
                React.createElement("i", null,
                    " ",
                    checkError.status + " " + checkError.statusText)))));
}
