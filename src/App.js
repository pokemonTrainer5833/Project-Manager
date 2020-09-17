import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./Components/dashboard/Dashboard";
import Navbar from "./Components/layout/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" component={Dashboard} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
