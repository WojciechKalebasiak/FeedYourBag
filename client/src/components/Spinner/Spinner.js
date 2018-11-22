import React from "react";
import spinner from "../../assets/spinner.gif";
export default function Spinner(props) {
  const { style } = props;
  return <img src={spinner} style={style} alt="spinner" />;
}
