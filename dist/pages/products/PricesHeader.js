import React from "react";
function PricesHeader(props) {
    return (React.createElement("div", { className: `pricesHeader ${props.pricesImage}` },
        React.createElement("div", { className: "pricesHeaderTitle" },
            React.createElement("h1", null, props.titlePricesHeader))));
}
export default PricesHeader;
