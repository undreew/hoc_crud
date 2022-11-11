import React from 'react';
import Navigation from '../Navigation/Navigation';

import './PublicPage.scss';

function PublicPage(props) {
	const {children, header, footer} = props;

	return (
		<div className='public-page'>
			<Navigation />
			{children}
		</div>
	);
}

export default PublicPage;
