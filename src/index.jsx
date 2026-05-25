import React from 'react'
import { createRoot } from 'react-dom/client';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { repository } from '../package.json';
import emulators from './emulators';
import { Emulator } from './Emulator';
import { List } from './List';
import { Home } from './Home';
 
import './index.css';

const App = () => {
    console.log(repository.url)
    return (
        <div className="h-screen flex flex-col bg-gray-100">
            <Router>
                <header className="z-30 p-4 flex items-center justify-between bg-green-700 text-white shadow-md">
                    <h1 className="text-xl font-mono font-bold text-shadow animate-color">
                        <Link to="/list">kabinet</Link>
                    </h1>
                    <a target="github" href={repository.url}>
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </header>
                <Routes>
                    {emulators.map((emulator) => (
                        <Route key={emulator.name} path={emulator.path} element={<Emulator emulator={emulator} {...emulator} />} />
                    ))}
                    <Route path="/list" element={<List />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </Router>
        </div>
    );
};

createRoot(document.getElementById('app')).render(<App />);
