import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import Components from "./components/Components";
import { Sidebar } from "./components/Sidebar";
import Routes from "./pages/Routes";

function App() {
  return (
    <Router>
      <div className="flex h-sreen overflow-y-hidden app">
        <Sidebar />
        <Routes />
      </div>
    </Router>
  );
}

export default App;
