import './index.css'; // Tailwind CSS 포함
import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
	<HashRouter>
		<App />
	</HashRouter>
);
