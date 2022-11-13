import React, {useEffect} from 'react';
import Modal from '../../components/Modal/Modal';
import Form from '../../components/Form/Form';
import Input from '../../components/Input/Input';

import {useFormInitializer} from '../../hooks/useFormInitializer';
import {Button} from '@mui/material';
import {Spinner} from 'reactstrap';

function PostsCreateModal(props) {
	const {
		data,

		isFetching,
		isSubmitting,

		isAddModalOpen,
		toggleAddModal,
		onAdd,

		isEdit,
		viewPostToEdit: toggleEditModal,
		itemToEdit,
		onEdit,
	} = props;

	const {isOpen: isEditModalOpen} = itemToEdit;

	const {register, handleSubmit, errors, reset, setValue} =
		useFormInitializer('post');

	useEffect(() => {
		reset();
	}, [isSubmitting, reset]);

	useEffect(() => {
		if (data) {
			setValue('title', data.title);
			setValue('message', data.message);
		}
	}, [data, setValue]);

	return (
		<Modal
			isLoading={isFetching}
			isOpen={isEdit ? isEditModalOpen : isAddModalOpen}
			header={isEdit ? 'EDIT POST' : 'ADD POST'}
		>
			<Form onSubmit={handleSubmit(isEdit ? onEdit : onAdd)}>
				<Input
					name='title'
					type='text'
					placeholder='Title'
					register={register}
					errors={errors}
				/>

				<Input
					name='message'
					type='text'
					placeholder='Message'
					register={register}
					errors={errors}
				/>

				<div className='form-actions'>
					<Button
						variant='contained'
						color='error'
						onClick={() => (isEdit ? toggleEditModal() : toggleAddModal())}
					>
						Cancel
					</Button>
					<Button type='submit' variant='contained' color='success'>
						{isSubmitting ? (
							<Spinner size='sm'></Spinner>
						) : isEdit ? (
							'Edit Post'
						) : (
							'Add Post'
						)}
					</Button>
				</div>
			</Form>
		</Modal>
	);
}

export default PostsCreateModal;
