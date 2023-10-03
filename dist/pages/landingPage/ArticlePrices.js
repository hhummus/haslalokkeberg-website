import React from "react";
import { Link } from "react-router-dom";
function ArticlePrices() {
    return (React.createElement("div", { className: "articlePrices" },
        React.createElement("div", { className: "container" },
            React.createElement("h2", { className: "articleTitle" },
                "Hva koster det \u00E5 bestille",
                " ",
                React.createElement("span", { className: "textSpan" }, "fotografering av oss?")),
            React.createElement("div", { className: "articleBtn btn-black btn-extra-margin" },
                React.createElement(Link, { to: "/prislister" }, "Til prislister")))));
}
export default ArticlePrices;
