import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {AuthContextProvider} from './context/AuthContext';
import routes from './routes';
import renderRoutes from './utils/renderRoutes';

function App() {
	return (
		<Router>
			<AuthContextProvider>{renderRoutes(routes)}</AuthContextProvider>
		</Router>
	);
}

export default App;
