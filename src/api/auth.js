import http from '../utils/http';

export const authSignup = (data) => {
	return http('POST', '/auth/signup', data);
};

export const authLogin = (data) => {
	return http('POST', '/auth/login', data);
};
