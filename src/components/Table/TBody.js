import React from 'react';
import {Button, TableBody, TableCell, TableRow} from '@mui/material';
import {Stack} from '@mui/system';

import PageviewIcon from '@mui/icons-material/Pageview';
import EditIcon from '@mui/icons-material/Edit';
import SendIcon from '@mui/icons-material/Send';

function TBody(props) {
	const {
		datas,
		formateDate,
		itemToEdit,
		onEdit,
		toggleDeleteModal,
		onView,
		viewPostToEdit,
	} = props;

	const DATA = datas ? datas : [];

	return (
		<TableBody>
			{DATA.map((item, index) => {
				const {title, createdAt, postId} = item;

				return (
					<TableRow key={index}>
						<TableCell component='th' scope='row' align='center'>
							{title}
						</TableCell>

						<TableCell align='center'>{formateDate(createdAt)}</TableCell>
						<TableCell align='center'>
							<Stack direction='row' spacing={2} justifyContent='center'>
								<Button
									variant='outlined'
									color='secondary'
									endIcon={<PageviewIcon />}
									onClick={() => onView(postId)}
								>
									View
								</Button>

								<Button
									variant='outlined'
									color='info'
									endIcon={<EditIcon />}
									onClick={() => viewPostToEdit(postId)}
								>
									Edit
								</Button>

								<Button
									variant='outlined'
									color='error'
									endIcon={<SendIcon />}
									onClick={() => toggleDeleteModal(postId)}
								>
									Delete
								</Button>
							</Stack>
						</TableCell>
					</TableRow>
				);
			})}
		</TableBody>
	);
}

export default TBody;
