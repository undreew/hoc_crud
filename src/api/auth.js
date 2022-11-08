import {http} from '../utils/http';

export const authSignup = (formData) => {
	return http('POST', '/auth/signup', formData);
};

export const authLogin = (formData) => {
	return http('POST', '/auth/login', formData);
};
