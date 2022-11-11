import React from 'react';
import Navigation from '../Navigation/Navigation';

import './PrivatePage.scss';

function PrivatePage(props) {
	const {children, header, footer} = props;

	return (
		<div className='private-page'>
			<Navigation />
			{children}
		</div>
	);
}

export default PrivatePage;
