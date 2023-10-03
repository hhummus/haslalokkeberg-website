import React from "react";
import { Link } from "react-router-dom";
function ArticleContact() {
    return (React.createElement("div", { className: "articleContainer" },
        React.createElement("div", { className: "container" },
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-sm col-no-padding" },
                    React.createElement("div", { className: "articleContainerText brown" },
                        React.createElement("h3", { className: "articleTitle" }, "Kontakt"),
                        React.createElement("p", { className: "articleP" }, "Vi h\u00E5per du tar kontakt med oss \u2014 vi h\u00E5per ogs\u00E5 at du vil sjekke ut v\u00E5rt tidsskrift kalt Kontakt."),
                        React.createElement("div", { className: "articleBtn btn-white" },
                            React.createElement(Link, { to: "https://oslovelobodega.com/products/tidsskriftet-kontakt-issue-03?_pos=1&_sid=b6a470adc&_ss=r", target: "_blank" }, "Sjekk ut tidsskriftet Kontakt")),
                        React.createElement("div", { className: "articleBtn btn-white " },
                            React.createElement(Link, { to: "/kontakt-oss" }, "Kontakt oss"))))))));
}
export default ArticleContact;
