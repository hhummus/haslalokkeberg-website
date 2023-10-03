import React from "react";
import { useNavigate } from "react-router-dom";
export const GoBack = () => {
    let navigate = useNavigate();
    return (React.createElement("button", { className: "goBack", onClick: () => navigate(-1) }, "Tilbake"));
};
export default GoBack;
