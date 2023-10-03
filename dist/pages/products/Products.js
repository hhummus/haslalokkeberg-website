import React from "react";
import { Link } from "react-router-dom";
import data from "../../components/json/InfoProducts.json";
const dataArray = data;
function Products() {
    return (React.createElement("div", { className: "product-container" },
        dataArray.map((item) => {
            return (React.createElement("div", { key: item.id, className: "products" },
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-sm-6 product-info" },
                        React.createElement("h1", null, item.headline),
                        React.createElement("p", null, item.intro)),
                    React.createElement("div", { className: "col-sm-6 product-price" },
                        React.createElement("p", null, item.cost))),
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col cta-products" },
                        React.createElement(Link, { to: "/produktfoto" }, "Oversikt")))));
        }),
        ";",
        React.createElement("p", { className: "priceFluctuation" }, "*Priser fluktuerer ut ifra time(r), antall bilder og destinasjon.")));
}
export default Products;
