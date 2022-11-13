import {Button} from '@mui/material';
import React from 'react';
import {Link} from 'react-router-dom';
import {useAuth} from '../../context/AuthContext';

const navLinks = [
	{
		to: '/posts',
		text: 'Posts',
	},
	{
		to: '/login',
		text: 'Login',
	},
];

function Navigation() {
	const {isAuth, logout} = useAuth();

	return (
		<nav>
			{navLinks.map((item, index) => {
				const {to} = item;

				if (to === '/login' && isAuth) {
					return null;
				}

				return (
					<Link key={index} to={item.to}>
						{item.text}
					</Link>
				);
			})}
			{isAuth && (
				<Button variant='contained' color='error' onClick={() => logout()}>
					Logout
				</Button>
			)}
		</nav>
	);
}

export default Navigation;
