import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

import {loginFormSchema, sectorFormSchema} from '../utils/formSchemas';

function formType(type) {
	switch (type) {
		case 'signup':
			return;

		case 'login':
			return loginFormSchema;

		case 'sector':
			return sectorFormSchema;

		default:
			break;
	}
}

export const useFormInitializer = (type) => {
	const config = formType(type);

	const {
		register,
		handleSubmit,
		formState: {errors},
		reset,
		setValue,
	} = useForm({resolver: yupResolver(config)});

	return {register, handleSubmit, errors, reset, setValue};
};
