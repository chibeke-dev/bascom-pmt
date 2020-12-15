import React, { Component } from "react";

class Card extends Component {
  render() {
    const { children } = this.props;

    return (
      <div class="min-w-0 p-4 bg-white rounded-lg shadow-xs">
        {children}
        {/* <h4 class="mb-4 font-semibold text-gray-600">
                  Revenue
                </h4> */}
        {/* <p class="text-gray-600 dark:text-gray-400">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Fuga, cum commodi a omnis numquam quod? Totam exercitationem
                  quos hic ipsam at qui cum numquam, sed amet ratione! Ratione,
                  nihil dolorum.
                </p> */}
      </div>
    );
  }
}
export default Card;
