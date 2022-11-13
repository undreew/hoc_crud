import {Typography} from '@mui/material';
import React from 'react';
import Modal from '../../components/Modal/Modal';

function PostDeleteModal(props) {
	const {itemToDelete, toggleDeleteModal, onDelete, isSubmitting} = props;
	const {isOpen, id} = itemToDelete;

	return (
		<Modal
			id={id}
			onAction={onDelete}
			isOpen={isOpen}
			toggle={toggleDeleteModal}
			header='Delete Post'
			footer
			cancelText='Close'
			okText='Confirm'
			isSubmitting={isSubmitting}
		>
			<Typography variant='subtitle1'>
				Are you sure you want to delete this post?
			</Typography>
		</Modal>
	);
}

export default PostDeleteModal;
