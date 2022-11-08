import {PAGE_ACCESS} from '../configs/constants';
import home from './home';
import error from './error';

const routes = [
	{
		access: PAGE_ACCESS.public,
		...home,
	},
	{
		...error,
	},
];

export default routes;
