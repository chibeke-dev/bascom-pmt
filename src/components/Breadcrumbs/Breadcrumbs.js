import React, { Component, Children } from "react";

class Breadcrumbs extends Component {
  render() {
    const { children } = this.props;
    const Child = Children.map(children, function (child, index) {
      const isLast = index === children.length - 1;

      return (
        <>
          {child}
          {isLast ? null : "/"}
        </>
      );
    });
    return (
      <nav className="bg-grey-400 p-3 rounded w-full m-4">
        <ol class="list-reset bg-grey-400 flex text-grey-dark">
          <li>
            <a href="#" class="text-blue font-bold">
              Home
            </a>
          </li>
          <span className="mx-2">
            <i className="fas fa-chevron-right">></i>
          </span>
          <li>
            <a href="#" class="text-blue font-bold">
              sub folder
            </a>
          </li>
          <span className="mx-2">
            <i className="fas fa-chevron-right">></i>
          </span>
          <li>current</li>
        </ol>
      </nav>
    );
  }
}

export default Breadcrumbs;
