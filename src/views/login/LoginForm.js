import {Button} from '@mui/material';
import React from 'react';
import Form from '../../components/Form/Form';
import Input from '../../components/Input/Input';
import {useAuth} from '../../context/AuthContext';
import {useFormInitializer} from '../../hooks/useFormInitializer';
import {Spinner} from 'reactstrap';

function LoginForm() {
	const {register, handleSubmit, errors, reset} = useFormInitializer('login');
	const {isAuthenticating, login} = useAuth();

	const onFormSubmit = (formData) => {
		login(formData);
		reset();
	};

	return (
		<div>
			<Form onSubmit={handleSubmit(onFormSubmit)}>
				<Input
					name='email'
					type='email'
					placeholder='Email'
					register={register}
					errors={errors}
				/>
				<Input
					name='password'
					type='password'
					placeholder='Password'
					register={register}
					errors={errors}
				/>

				<Button type='submit' variant='contained'>
					{isAuthenticating ? <Spinner size='sm' /> : 'Login'}
				</Button>
			</Form>
		</div>
	);
}

export default LoginForm;
