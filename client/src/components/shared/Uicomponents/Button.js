import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";
function Button(props) {
  return (
    <button className={props.className}>
      <Link to={props.to} className="btn-link">
        {" "}
        {props.children}
      </Link>
    </button>
  );
}

export default Button;
