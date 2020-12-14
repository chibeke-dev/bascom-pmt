import React, { Component } from "react";

class Divider extends Component {
  render() {
    const { width } = this.props;
    return (
      <hr
        className={` border-t
        } w-${width}`}
      />
    );
  }
}

export default Divider;
