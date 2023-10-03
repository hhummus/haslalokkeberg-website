import React from "react";
import { Link } from "react-router-dom";
import portfolioImage from "../../img/om-oss/1013994B-D904-4453-B4E7-7FB47255C779.JPG";
function ArticlePortfolio() {
    return (React.createElement("div", { className: "articleContainer" },
        React.createElement("div", { className: "container" },
            React.createElement("div", { className: "row row-eq-height" },
                React.createElement("div", { className: "col-sm-8" },
                    React.createElement("div", { className: "articleContainerText blue" },
                        React.createElement("h3", { className: "articleTitle" }, "Tidligere arbeid"),
                        React.createElement("p", { className: "articleP" }, "Vi tar oppdrag for blant annet bedrifter, privatpersoner, eventer, bryllup og nyf\u00F8dt fotografering."),
                        React.createElement("div", { className: "articleBtn btn-white" },
                            React.createElement(Link, { to: "/tidligere-arbeid" }, "Ta en titt")))),
                React.createElement("div", { className: "col-sm-4 portfolioImgContainer" },
                    React.createElement("div", { className: "divForImage" },
                        React.createElement("img", { src: portfolioImage, alt: "something" })))))));
}
export default ArticlePortfolio;
