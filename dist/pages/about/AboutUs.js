import React from "react";
import { Link } from "react-router-dom";
import aboutUsImage from "../../img/om-oss-mobile.jpg";
function AboutUs() {
    return (React.createElement("div", { className: "aboutUs" },
        React.createElement("div", { className: "container" },
            React.createElement("div", { className: "row" },
                React.createElement("h1", { className: "aboutPageTitle" }, "Vi er et oslobasert fotograf-firma som tar oppdrag for privatpersoner og bedrifter."),
                React.createElement("p", { className: "aboutPageIntro" }, "Vi har begge lang erfaring med fotografering b\u00E5de i analogt og digitalt format. Vi jobber prim\u00E6rt i Oslo og omegn men kan ogs\u00E5 flytte oss dit du er.")),
            React.createElement("div", { className: "aboutPageImgContainer" },
                React.createElement("div", { className: "row" },
                    React.createElement("img", { src: aboutUsImage, alt: "tine hasla and helena l\u00F8kkeberg in nature" }))),
            React.createElement("small", { className: "aboutPageImageText" }, "Hasla-L\u00F8kkeberg Agentur ble grunnlagt i 2021 av Helena L\u00F8kkeberg og Stine Hasla."),
            React.createElement("div", { className: "row" },
                React.createElement("p", { className: "getInTouch" },
                    React.createElement(Link, { to: "/kontakt-oss" }, "Har du sp\u00F8rsm\u00E5l? Kunne du tenkt deg en uforpliktende prat? Klikk her for \u00E5 sende oss en e-post."))))));
}
export default AboutUs;
