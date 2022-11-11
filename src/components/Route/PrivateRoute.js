import React from 'react';
import {Navigate} from 'react-router-dom';
import {useAuth} from '../../context/AuthContext';

function PrivateRoute(props) {
	const {children} = props;
	const {isAuth} = useAuth();

	if (isAuth) {
		return children;
	}

	return <Navigate replace={true} to='/' />;
}

export default PrivateRoute;
