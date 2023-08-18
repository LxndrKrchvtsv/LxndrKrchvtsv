import React, { StrictMode } from 'react';
import { createRoot, Root } from 'react-dom/client';

import App from './App';
import './App.module.css';
import { BrowserRouter } from 'react-router-dom';

const root = document.getElementById('root');

const app: Root = createRoot(root as HTMLElement);

app.render(
	<StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</StrictMode>,
);
