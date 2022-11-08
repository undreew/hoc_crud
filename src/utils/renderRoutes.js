import React from 'react';
import {Routes, Route} from 'react-router-dom';
import PrivateRoute from '../components/Route/PrivateRoute';
import PublicRoute from '../components/Route/PublicRoute';
import {PAGE_ACCESS} from '../configs/constants';

function renderRoutes(routes) {
	return (
		<Routes>
			{routes.map((item, index) => {
				const {access, path, element} = item;

				if (access === PAGE_ACCESS.public) {
					return (
						<Route
							key={index}
							path={path}
							element={<PublicRoute>{element}</PublicRoute>}
						/>
					);
				}

				if (access === PAGE_ACCESS.private) {
					return (
						<Route
							key={index}
							path={path}
							element={<PrivateRoute>{element}</PrivateRoute>}
						/>
					);
				}

				return <Route key={index} path={path} element={element} />;
			})}
		</Routes>
	);
}

export default renderRoutes;
