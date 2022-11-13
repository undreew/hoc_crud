import React from 'react';
import Paper from '@mui/material/Paper';
import {Table, TableContainer} from '@mui/material';
import {Stack} from '@mui/system';
import {Spinner} from 'reactstrap';
import THead from '../../components/Table/THead';
import TBody from '../../components/Table/TBody';

function PostTable(props) {
	const {heads, datas, isLoading} = props;

	function formatDate(date) {
		let options = {
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		};
		const cutDate = date.substring(0, 10);
		const newDate = new Date(cutDate);

		return newDate.toLocaleDateString('en-US', options);
	}

	return (
		<TableContainer component={Paper}>
			{isLoading ? (
				<Stack justifyContent='center'>
					<Spinner size='sm'></Spinner>
				</Stack>
			) : (
				<Table sx={{minWidth: 650}} aria-label='simple table'>
					<THead heads={heads} />
					<TBody data={datas} formateDate={formatDate} {...props} />
				</Table>
			)}
		</TableContainer>
	);
}

export default PostTable;
