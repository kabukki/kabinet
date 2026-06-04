import React from 'react';
import { Link } from 'react-router-dom';

import { Pixels } from './common';

export const Home = () => (
    <main className="flex-1 relative overflow-hidden">
        <Pixels className="absolute inset-0" />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 space-y-4 text-center">
            <h1 className="text-8xl text-white text-shadow font-mono animate-reveal">👾<br />konsole</h1>
            <h2 className="text-xl text-gray-100 opacity-0 animate-reveal [animation-delay:1000ms] [animation-fill-mode:forwards]">Handcrafted retro console emulators, playable in your browser</h2>
            <button className="px-4 py-2 rounded-full bg-green-700 hover:bg-green-500 transition text-white opacity-0 animate-reveal [animation-delay:1500ms] [animation-fill-mode:forwards]">
                <Link to="/list">Let's play!</Link>
            </button>
        </div>
    </main>
);
