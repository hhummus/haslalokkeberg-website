import * as React from "react";
import "../../css/footer.css";

function Footer() {
  return (
    <div className="globalFooter">
      <div className="container">
        <div className="row">
          <div className="col globalFooterCopyright">
            <small>@2023 haslalokkeberg</small>
          </div>
        </div>
        <div className="col">
          <small>Nettside av Helena Løkkeberg</small>
        </div>
      </div>
    </div>
  );
}

export default Footer;
