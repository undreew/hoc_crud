import React from 'react';
import {TableCell, TableHead, TableRow, Typography} from '@mui/material';

function THead({heads}) {
	return (
		<TableHead>
			<TableRow>
				{heads.map((item, index) => {
					return (
						<TableCell key={index}>
							<Typography variant='h5' align='center'>
								{item}
							</Typography>
						</TableCell>
					);
				})}
			</TableRow>
		</TableHead>
	);
}

export default THead;
