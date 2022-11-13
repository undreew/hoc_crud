import {Typography} from '@mui/material';
import React from 'react';
import Modal from '../../components/Modal/Modal';

function PostsViewModal(props) {
	const {data, toggleViewModal, itemToView, isFetching} = props;
	const {isOpen} = itemToView;

	return (
		<Modal
			isOpen={isOpen}
			toggle={toggleViewModal}
			isLoading={isFetching}
			header='VIEW POST'
			footer
			cancelText='Close'
		>
			<Typography variant='h4'>{data && data.title}</Typography>
			<Typography variant='subtitle1'>{data && data.message}</Typography>
		</Modal>
	);
}

export default PostsViewModal;
