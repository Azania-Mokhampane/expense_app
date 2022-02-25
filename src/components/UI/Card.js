import React from "react";
import "./Card.css";

const Card = (props) => {
  const classes = " card " + props.className;
  return <div className={classes}>{props.children}</div>;

  //children props will always contain the content between the opening and closing tag of your custom components
};

export default Card;
