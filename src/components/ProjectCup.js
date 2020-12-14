import React, { Component } from "react";
import { HiViewBoards } from "react-icons/hi";
import { Link } from "react-router-dom";
class ProjectCup extends Component {
  render() {
    const { name, to } = this.props;
    return (
      <Link to={to}>
        <div className="flex flex-grow-0 flex-col justify-center items-center w-28 h-36 mr-1 mb-1">
          <div className="flex justify-center align-center p-3 w-20 h-24  rounded-3xl mx-4 text-7xl bg-blue-500 hover:bg-blue-600 transition text-white">
            <HiViewBoards />
          </div>
          <span className="text-xs">
            {name.length > 8 ? name.slice(0, 8) + "..." : name}
          </span>
        </div>
      </Link>
    );
  }
}

export default ProjectCup;
