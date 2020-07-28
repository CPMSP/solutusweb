import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Main from "./components/Main";
import Projects from "./components/Projects";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" render={() => <Landing />} />
				<Route exact path="/main" render={() => <Main />} />
				<Route exact path="/Projects" render={() => <Projects />} />
				<Route exact path="/About" render={() => <About />} />
				<Route exact path="/Blog" render={() => <Blog />} />
				<Route exact path="/Contact" render={() => <Contact />} />
				<Route component={NotFound} />
			</Switch>
		</div>
	);
}

export default App;
