import React, { Component } from "react";
import { Link } from "react-router-dom";
import Popover from "react-tiny-popover";

class Avatar extends Component {
  state = {
    isPopoverOpen: false,
  };

  getInitial = (name) => {
    let full_name = name.split(" ");
    let initial1 = full_name[0].substring(0, 1).toUpperCase();
    if (full_name.length > 1) {
      let initial2 = full_name[1].substring(0, 1).toUpperCase();
      const Initials = `${initial1}${initial2}`;
      return Initials;
    } else {
      return initial1;
    }
  };

  render() {
    const { name, color, size } = this.props;
    return (
      <div
        className={`flex items-center justify-center h-${
          size === "1" ? 12 : 9
        } w-${
          size === "1" ? 12 : 9
        } rounded-full bg-${color}-500 text-white font-bold flex-shrink-0`}
      >
        {this.getInitial(name)}
      </div>
    );
  }
}

export default Avatar;
