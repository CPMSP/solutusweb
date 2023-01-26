import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Main from "./pages/Main";
import Clients from "./pages/Clients";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <Landing />} />
        <Route path="/main" render={() => <Main />} />
        <Route path="/clients" render={() => <Clients />} />
        <Route path="/about" render={() => <About />} />
        <Route path="/contact" render={() => <Contact />} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
