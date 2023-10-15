import * as React from "react";
import "../../css/backOne.css";
import { useNavigate } from "react-router-dom";

function GoBack () {
  let navigate = useNavigate();



 
  return (
    <button className= "backOne" onClick={() => navigate(-1)}>
    &#8592; Tilbake
    </button>
  );
}
export default GoBack;
