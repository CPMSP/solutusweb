import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Main from './pages/Main';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" render={() => <Landing />} />
				<Route exact path="/main" render={() => <Main />} />
				<Route exact path="/projects" render={() => <Projects />} />
				<Route exact path="/about" render={() => <About />} />
				<Route exact path="/contact" render={() => <Contact />} />
				<Route component={NotFound} />
			</Switch>
		</div>
	);
}

export default App;
