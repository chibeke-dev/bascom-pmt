import React, { Component } from "react";
import Popover from "react-tiny-popover";

class Test extends Component {
  state = {
    isPopoverOpen: false,
  };
  render() {
    const { isPopoverOpen } = this.state;
    return (
      <div>
        <Popover
          isOpen={isPopoverOpen}
          position={"top"} // preferred position
          content={<div>Hi! I'm popover content.</div>}
        >
          <div onClick={() => this.setState({ isPopoverOpen: !isPopoverOpen })}>
            Click me!
          </div>
        </Popover>
      </div>
    );
  }
}

export default Test;
