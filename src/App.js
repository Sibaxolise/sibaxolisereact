import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Home from './Home'; // Assuming you have a Home component

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/contact" component={Contact} />
                <Route path="/projects" component={Projects} />
                <Route path="/skills" component={Skills} />
                <Route path="/about" component={About} />
                <Route path="/" component={Home} />
            </Switch>
        </Router>
    );
}

export default App;

