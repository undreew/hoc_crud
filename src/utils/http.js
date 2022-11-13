import axios from 'axios';
import {API_URL} from '../configs/environment';
import cookies from './cookies';
import {COOKIE_NAME} from '../configs/constants';
import ERROR_MESSAGES from '../configs/errorMessages';

axios.defaults.baseURL = API_URL;
axios.defaults.timeout = 50 * 1000; // 50 second timeout
axios.defaults.timeoutErrorMessage = ERROR_MESSAGES.timeout;

axios.defaults.headers = {
	'Content-Type': 'application/json',
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE',
	Authorization: `Bearer ${cookies.get(COOKIE_NAME)}`,
};

// axios.interceptors.request.use((config) => {
// 	if (cookies.get(COOKIE_NAME)) {
// 		config.headers.Authorization = `Bearer ${cookies.get(COOKIE_NAME)}`;
// 	}
// 	return config;
// });

async function success(response) {
	return Promise.resolve(response.data);
}

async function failure(error) {
	if (error.message === ERROR_MESSAGES.timeout) {
		// if it hits 50 second (default timeout) or the desired timeout we are going to redirect to 504
		console.log(error.message);
		window.location.replace('/error/504'); // REDIRECT to error route
		// This are to match the alertByError(e)
		return Promise.reject({
			errors: {code: 'timeout', message: ERROR_MESSAGES.timeout},
		});
	}
}

async function http(method, endpoint, data) {
	let config = {
		method,
		url: endpoint,
	};

	if (method === 'GET') {
		config.params = data;
	} else {
		config.data = data;
	}

	console.log(config);

	return axios(config).then(success).catch(failure);
}

export default http;
