import React, { Component } from "react";
import Menubar from "../components/Menubar";

class Notifications extends Component {
  render() {
    return (
      <div className="w-full">
        <Menubar name="Notification" />
      </div>
    );
  }
}

export default Notifications;
