import React from "react";
import "./Button.scss";

type PrivateProps = {
    title: string;
    isBlack: boolean;
}
const Button = ({title, isBlack}: PrivateProps) => {
    const backgroundButton = isBlack ? "black" : "white";
    return (
        <div className="container-button">
            <button className={`button ${backgroundButton}`}>{title}</button>
        </div>
    )
}

export default Button