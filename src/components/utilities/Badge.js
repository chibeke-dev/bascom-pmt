import React, { Component } from "react";

class Badge extends Component {
  render() {
    const { children, color, rounded, width } = this.props;
    return (
      <span
        className={`inline-block bg-${color}-300 rounded-${rounded} px-3 py-1 text-sm font-semibold w-${width} text-center text-white-700 mr-2`}
      >
        {children}
      </span>
    );
  }
}

export default Badge;
