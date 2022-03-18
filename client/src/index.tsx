import React from 'react';
import ReactDOM from 'react-dom';
//local modules
import { GameContextProvider } from './context/game.context';
import { App } from './pages/App';

ReactDOM.render(
	<React.StrictMode>
		<GameContextProvider>
			<App />
		</GameContextProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
