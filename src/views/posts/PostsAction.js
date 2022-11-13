import React from 'react';
import {Button} from '@mui/material';

function PostsAction(props) {
	const {toggleAddModal} = props;

	return (
		<div>
			<Button variant='contained' color='primary' onClick={toggleAddModal}>
				Add Post
			</Button>
		</div>
	);
}

export default PostsAction;
