import React, { Component } from "react";
import Menubar from "../components/Menubar";

class MyTasks extends Component {
  render() {
    return (
      <div className="w-full">
        <Menubar name="My Task" />
      </div>
    );
  }
}

export default MyTasks;
