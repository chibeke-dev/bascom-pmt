import React, { Component } from "react";
import { NavLink } from "react-router-dom";

/**
 * #### Sidebar Icon
 * Sidebar icon takes in icons as its children
 * It functions as a link too.
 *
 * Usage:
 * ```
 *  <SidebarIcon to="/somewhere">
 *    icon goes here
 *  </SidebarIcon>
 * ```
 */
class SidebarIcon extends Component {
  render() {
    const { children, to } = this.props;

    return (
      <li>
        <NavLink to={to}>
          <span className="flex items-center justify-center hover:bg-blue-500 hover:text-gray-50 text-gray-500 h-12 w-12 rounded-2xl text-2xl">
            {children}
          </span>
        </NavLink>
      </li>
    );
  }
}

export default SidebarIcon;
