import React from 'react';

function Input(props) {
	const {name, type, className, errors, register, placeholder} = props;

	return (
		<div className='form-control'>
			<input
				name={name}
				type={type}
				placeholder={placeholder}
				className={`input ${className}`}
				{...register(name)}
			/>
			<p className='input-error'>{errors[name]?.message}</p>
		</div>
	);
}

export default Input;
