import React, { Component } from "react";
import { Link } from "react-router-dom";

class SidebarIcon extends Component {
  render() {
    const { children, to } = this.props;

    return (
      <li>
        <Link to={to}>
          <span className="flex items-center justify-center hover:bg-blue-500 hover:text-gray-50 text-gray-500 h-12 w-12 rounded-2xl text-2xl">
            {children}
          </span>
        </Link>
      </li>
    );
  }
}

export default SidebarIcon;
