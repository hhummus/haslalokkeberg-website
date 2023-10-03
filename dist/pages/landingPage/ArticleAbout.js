import React from "react";
function ArticleAbout() {
    return (React.createElement("div", { className: "landingPage" },
        React.createElement("div", { className: "landingImage" }),
        React.createElement("div", { className: "landingPageIntro" },
            React.createElement("h1", { className: "landingPageIntroText" },
                "Et Oslobasert fotograf-firma",
                " ",
                React.createElement("span", { className: "textSpan" }, "som tar oppdrag for"),
                "privatpersoner og bedrifter."))));
}
export default ArticleAbout;
