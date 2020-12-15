import React, { Component } from "react";

class Button extends Component {
  // props = {
  //   border: "",
  //   bgColor: "",
  //   color: "",
  //   size: "",
  //   to: "",
  //   style: "fill",
  // };
  size() {
    switch (this.props.size) {
      case "sm":
        return "xs";
      // return "sm";
      case "lg":
        return "base";
      case "md":
      default:
        return "sm";
    }
  }

  /**
   * You can switch between outline button and filled
   */

  render() {
    const { children, bgColor, border, color, to, styles } = this.props;
    return (
      <button
        className={`bg-${bgColor ? bgColor : "blue"}-500 text-${
          color ? color : "white"
        } active:bg-${
          bgColor ? bgColor : "blue"
        }-600 font-bold uppercase text-${this.size()} px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1`}
        type="button"
        style={{ transition: "all .15s ease" }}
      >
        {children}
      </button>
    );
  }
}

export default Button;
