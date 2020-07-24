import React from 'react';
import { Link } from 'react-router-dom';
import * as Routes from '../../routers/routes';

const RegisterScreen = () => {
	return (
		<>
			<h3 className='auth__title'>Register</h3>

			<form className='auth__form'>
				<input
					className='auth__input'
					type='text'
					placeholder='Name'
					name='name'
					autoComplete='off'
				/>
				<input
					className='auth__input'
					type='text'
					placeholder='Email'
					name='email'
					autoComplete='off'
				/>
				<input
					className='auth__input'
					type='password'
					placeholder='Password'
					name='password'
				/>
				<input
					className='auth__input'
					type='password'
					placeholder='Confirm password'
					name='password2'
				/>
				<button className='btn btn-primary btn-block mt-1 mb-5' type='submit'>
					Login
				</button>

				<Link className='auth__link' to={Routes.AUTH_LOGIN}>
					Already registered ?
				</Link>
			</form>
		</>
	);
};

export default RegisterScreen;
