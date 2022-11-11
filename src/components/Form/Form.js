import React from 'react';

function Form(props) {
	const {className, children, onSubmit} = props;

	return (
		<form className={className} onSubmit={onSubmit}>
			{children}
		</form>
	);
}

export default Form;
