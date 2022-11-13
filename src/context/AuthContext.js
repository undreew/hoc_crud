import React, {createContext, useContext, useState} from 'react';
import {authLogin, authSignup} from '../api/auth';
import {useAlert} from './AlertContext';
import cookies from '../utils/cookies';
import {COOKIE_NAME} from '../configs/constants';

const AuthContext = createContext({});

function AuthContextProvider(props) {
	const {children} = props;
	const {handleOk, handleError} = useAlert();

	const [isAuthenticating, setIsAuthenticating] = useState(false);
	const [isAuth, setIsAuth] = useState(!!cookies.get(COOKIE_NAME));

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

	async function login(formData) {
		try {
			setIsAuthenticating(true);

			const {data} = await authLogin(formData);
			const {token} = data;

			const today = new Date();
			today.setHours(today.getHours() + 2);

			// STORE TOKEN IN COOKIES
			cookies.set(COOKIE_NAME, token, {expires: today});

			setIsAuth(true);
		} catch (error) {
			handleError(error.message);
		}
		setIsAuthenticating(false);
	}

	function logout() {
		cookies.remove(COOKIE_NAME);
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
