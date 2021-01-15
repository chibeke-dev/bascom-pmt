import React, { Component } from "react";
// import PropTypes from "prop-types";

class Input extends Component {
  // static propTypes = {
  //   prop: PropTypes,
  // };

  // state = {
  //   placeholder: "",
  //   type: "",
  // };

  render() {
    return (
      <div>
        <input
          {...this.props}
          className={
            this.props.className +
            "mx-3 my-2 border border-gray-500 rounded-md px-2 py-2 focus:outline-none"
          }
        />
      </div>
    );
  }
}


export default Input;
