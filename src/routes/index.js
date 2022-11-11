import {PAGE_ACCESS} from '../configs/constants';
import error from './error';
import home from './home';
import login from './login';
import posts from './posts';

const routes = [
	{
		access: PAGE_ACCESS.public,
		...home,
	},
	{access: PAGE_ACCESS.public, ...login},
	{
		access: PAGE_ACCESS.private,
		...posts,
	},
	{
		...error,
	},
];

export default routes;
