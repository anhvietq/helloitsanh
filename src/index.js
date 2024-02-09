import React from 'react';
import './index.css'

import { createRoot } from 'react-dom/client';
import App from './App'; // Your root component

// Replace ReactDOM.render with createRoot
createRoot(document.getElementById('root')).render(<App />);