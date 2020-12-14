import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { HiBell, HiCog, HiEyeOff, HiHome } from "react-icons/hi";
import { MdAssignment } from "react-icons/md";
import SidebarIcon from "./SidebarIcon";
import Divider from "../Divider";
import { Avatar } from "../Avatar";
class Sidebar extends Component {
  triggerHover() {}
  render() {
    return (
      <div className="flex flex-col items-center shadow-md py-4 flex-shrink-0 w-20 bg-white-800 h-screen sticky overflow-y-hidden">
        <ul className="flex flex-col space-y-2 mt-12 mb-5">
          <span className="">
            <Avatar name="maxwell diogu uche" color="green" size="1" />
          </span>
          <SidebarIcon to="/">
            <HiHome />
          </SidebarIcon>
          <SidebarIcon to="/i/my-task">
            <MdAssignment />
          </SidebarIcon>
          <SidebarIcon to="/i/notifications">
            <HiBell />
          </SidebarIcon>
          <SidebarIcon to="/private/components">
            <HiEyeOff />
          </SidebarIcon>
        </ul>
        <Divider width="20" />
        <ul className="mt-auto mb-5 flex items-center justify-center  h-10 w-10 rounded-full">
          <SidebarIcon to="/settings">
            <HiCog />
          </SidebarIcon>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
