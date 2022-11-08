import React from 'react';

import './PrivatePage.scss';

function PrivatePage(props) {
	const {children, header, footer} = props;

	return <div className='private-page'>{children}</div>;
}

export default PrivatePage;
