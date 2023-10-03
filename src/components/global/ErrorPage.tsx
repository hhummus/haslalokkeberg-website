import * as React from "react";
import { useRouteError } from "react-router-dom";
import "../../css/errorPage.css";


export default function ErrorPage() {

   interface ErrorHandler {
    status: string,
    statusText: string
  } 

  const checkError = useRouteError() as ErrorHandler;
  console.error(checkError);

  return (
    <div id="error-page">
      <div className="container">
        <h1 className="errorTitle">Something went wrong. </h1>
        <p className="errorP">An unexpected error has occurred.</p>
        <p className="errorStatus">
          <i> {checkError.status + " " + checkError.statusText}</i>
        </p>
      </div>
    </div>
  );
}
