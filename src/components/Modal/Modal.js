import {Button} from '@mui/material';
import React, {Fragment} from 'react';
import {
	Modal as ReactModal,
	ModalBody,
	ModalFooter,
	ModalHeader,
	Spinner,
} from 'reactstrap';

function Modal(props) {
	const {
		isOpen,
		toggle,
		onAction,

		id,

		isLoading,
		isSubmitting,

		okText,
		cancelText,
	} = props;
	const {header, children, footer} = props;

	return (
		<Fragment>
			<ReactModal isOpen={isOpen} toggle={toggle}>
				<ModalHeader>{header}</ModalHeader>

				<ModalBody>
					{isLoading ? <Spinner size='sm'></Spinner> : children}
				</ModalBody>

				{footer && (
					<ModalFooter>
						{cancelText && (
							<Button
								variant='contained'
								color='error'
								onClick={() => toggle()}
							>
								{cancelText}
							</Button>
						)}
						{okText && (
							<Button
								variant='contained'
								color='success'
								onClick={() => onAction(id)}
							>
								{isSubmitting ? <Spinner size='sm'></Spinner> : 'Confirm'}
							</Button>
						)}
					</ModalFooter>
				)}
			</ReactModal>
		</Fragment>
	);
}

export default Modal;
