import React from "react";
import { socialMediaPhotos } from "./socialImages";
function ArticleTwo() {
    // new var with first 9 images
    const firstNinePhotos = socialMediaPhotos.filter((_, index) => index < 9);
    // displaying each of the 9 images
    const socialPhotos = firstNinePhotos.map((image) => {
        return (React.createElement("div", { className: "col" },
            React.createElement("img", { src: image, alt: "social media photos", className: "socialImageWidth" })));
    });
    return (React.createElement("div", { className: "articleTwo" },
        React.createElement("div", { className: "container" },
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col" },
                    React.createElement("h1", { className: "articleTwoTitle" }, "Bli bedre kjent med oss gjennom fotografier fra dagliglivet."),
                    React.createElement("p", { className: "articleTwoP" }, "Kanskje litt utradisjonelt? Vi liker det s\u00E5nn."))),
            React.createElement("div", { className: "photographsDaily row" }, socialPhotos),
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-12" },
                    React.createElement("p", { className: "articleTwoSmallP" }, "Vi liker ogs\u00E5 kj\u00E6rlighet for alle. B\u00E6rekraft. Norske r\u00E5varer. Oransje-vin. B\u00F8ker. Stine liker krim, Helena digger sci-fi."))))));
}
export default ArticleTwo;
