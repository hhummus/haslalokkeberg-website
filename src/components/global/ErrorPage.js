import { useRouteError } from "react-router-dom";
import "../../css/errorPage.css";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <div className="container">
        <h1 className="errorTitle">Something went wrong. </h1>
        <p className="errorP">An unexpected error has occurred.</p>
        <p className="errorStatus">
          <i>{error.status + " " + error.statusText}</i>
        </p>
      </div>
    </div>
  );
}
