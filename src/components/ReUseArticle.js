import { Link } from "react-router-dom";

function ReUseArticle(props) {

  
  return (
    <div className={props.ReUseArticleContainer}>
      <img
        src={props.bgImage}
        alt="background visuals"
        className="bgImage"
      ></img>
      <div className="container">
        <div className="row">
          <h1 className="reUseArticleH1">{props.title}</h1>
        </div>
        <div className="row">
          <p className="reUseArticleP">{props.description}</p>
        </div>

        <div className="row">
          <div className="col-12 reUseArticleBtnContainer">
            <Link to={props.linkTo} className="reUseArticleBtn">
              {props.linkButton}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReUseArticle;
