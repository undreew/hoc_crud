import React from 'react';

import './PublicPage.scss';

function PublicPage(props) {
	const {children, header, footer} = props;

	return <div className='public-page'>{children}</div>;
}

export default PublicPage;
