import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Home from './components/Home'; // Assuming you have a Home component

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/skills" component={Skills} />
                <Route path="/projects" component={Projects} />
                <Route path="/contact" component={Contact} />
            </Routes>
        </Router>
    );
}

export default App;

