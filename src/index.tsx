import React from 'react';
import {createRoot, Root} from 'react-dom/client';

import App from './App';
import './App.module.css'

const root = document.getElementById('root');

const app:Root = createRoot(root as HTMLElement);

app.render(<App />);
