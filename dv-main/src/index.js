import React from 'react';
import { createRoot } from 'react-dom/client';
// import  { App } from './face/App';
// import { App } from './interactive/App';
// import { App } from './fetch-data/App';
// import { App } from './colorful/App';
// import { App } from './bar-chart/App';
// import { App } from './scatter/App';
// import { App } from './line-chart/App';
import { App } from './geo-chart/App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);