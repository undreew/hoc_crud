import * as yup from 'yup';

export const loginFormSchema = yup.object().shape({
	email: yup
		.string()
		.required('Please enter an email.')
		.email('Must be a valid email.'),
	password: yup.string().required().min(5),
});

export const sectorFormSchema = yup.object().shape({
	sectorName: yup.string().required('This field is required!'),
	sectorCode: yup.string().required('This field is required!'),
});
