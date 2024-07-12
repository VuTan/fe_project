import React from "react";
import "./Button.scss";

type ButtonProps = {
    title: string;
    isBlack: boolean;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
}

const Button = ({ title, isBlack, onClick, type = "button" }: ButtonProps) => {
    const backgroundButton = isBlack ? "black" : "white";
    return (
        <div className="container-button">
            <button className={`button ${backgroundButton}`} onClick={onClick} type={type}>
                {title}
            </button>
        </div>
    );
}

export default Button;
