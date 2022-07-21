import React from 'react';
import { createRoot } from 'react-dom/client';
// import  { App } from './face/App.js';
// import { App } from './interactive/App.js';
// import { App } from './fetch-data/App';
// import { App } from './colorful/App';
import { App } from './bar-chart/App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);