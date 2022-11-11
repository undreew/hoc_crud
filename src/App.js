import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {AlertContextProvider} from './context/AlertContext';
import {AuthContextProvider} from './context/AuthContext';
import routes from './routes';
import renderRoutes from './utils/renderRoutes';

function App() {
	return (
		<Router>
			<AlertContextProvider>
				<AuthContextProvider>{renderRoutes(routes)}</AuthContextProvider>
			</AlertContextProvider>
		</Router>
	);
}

export default App;
