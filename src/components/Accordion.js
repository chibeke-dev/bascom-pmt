import React, { Component } from "react";
import { IoCaretDownOutline, IoCaretForwardOutline } from "react-icons/io5";

class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homeSortName: "",
      accordIsOpen: false,
    };
  }
  toggleAccord() {
    this.setState((currentState) => ({
      ...this.state,
      accordIsOpen: !currentState.accordIsOpen,
    }));
  }

  render() {
    const { homeSortName, children } = this.props;
    return (
      <div className="rounded-sm w-full">
        <button
          className="focus:outline-none outline-none transition-all duration-1000 ease-in-out"
          type="button"
          onClick={() => this.toggleAccord()}
        >
          <div className="bg-gray-100  pr-10 transition-all duration-1000 ease-in-out pl-2 py-6 flex items-center text-gray-700">
            {this.state.accordIsOpen === true ? (
              <IoCaretDownOutline />
            ) : (
              <IoCaretForwardOutline />
            )}
            <span className="ml-3">{homeSortName}</span>
          </div>
        </button>
        <div className="border-black border-t-2 opacity-30"></div>

        <div
          className={`${
            this.state.accordIsOpen === true
              ? "transition-open"
              : "transition-close"
          } bg-white ml-9 mt-3 px-1 transition-call flex flex-wrap  py-1 rounded-lg text-gray-600`}
        >
          {children}
        </div>
      </div>
    );
  }
}

export default Accordion;
