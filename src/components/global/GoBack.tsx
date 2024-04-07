import * as React from "react";
import "../../css/backOne.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft} from '@fortawesome/free-solid-svg-icons';

function GoBack () {
  let navigate = useNavigate();

  return (
    <button className= "backOne" onClick={() => navigate(-1)}>
     <FontAwesomeIcon icon={faAnglesLeft} size="sm" /> Tilbake
    </button>
  );
}
export default GoBack;
