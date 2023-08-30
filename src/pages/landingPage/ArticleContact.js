function ArticleContact() {
  return (
    <div className="articleContact">
      <div className="container">
        <div className="row">
          <h3 className="articleContactH3">Kontakt</h3>
        </div>
        <div className="row">
          <p className="articleContactP">
            Vi håper du tar kontakt med oss - vi håper også at du vil sjekke ut{" "}
            <span className="spanBlock"> vårt tidsskrift kalt Kontakt.</span>
          </p>
        </div>
        <div className="row articleContactBtnContainer">
          <div className="col">
            <a href="/kontakt-oss" className="articleContactUs">
              Kontakt oss
            </a>
          </div>
          <div className="col">
            <a
              href="https://oslovelobodega.com/products/tidsskriftet-kontakt-issue-03?_pos=1&_sid=b6a470adc&_ss=r"
              target="_blank"
              rel="noreferrer"
              className="articleContactKontakt"
            >
              Sjekk ut KONTAKT
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleContact;
