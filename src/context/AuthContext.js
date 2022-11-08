import React, {createContext, useContext, useState} from 'react';
import {authSignup} from '../api/auth';
import {useAlert} from './AlertContext';

const AuthContext = createContext({});

function AuthContextProvider(props) {
	const {children} = props;
	const {handleOk, handleError} = useAlert();

	const [isAuthenticating, setIsAuthenticating] = useState(false);
	const [isAuth, setIsAuth] = useState(false);

	async function signup(formData) {
		try {
			setIsAuthenticating(true);

			const data = await authSignup(formData);
			const {message} = data;

			setIsAuth(true);

			handleOk(message);
		} catch (error) {
			handleError(error.message);
		}
		setIsAuthenticating(false);
	}

	async function login(formData) {}

	function logout() {
		setIsAuth(false);
	}

	const authContext = {
		isAuthenticating,
		isAuth,
		signup,
		login,
		logout,
	};

	return (
		<AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
	);
}

const useAuth = () => useContext(AuthContext);

export {AuthContext, AuthContextProvider, useAuth};
