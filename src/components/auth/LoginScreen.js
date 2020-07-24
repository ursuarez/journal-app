import React from 'react';
import { Link } from 'react-router-dom';
import * as Routes from '../../routers/routes';
import { useForm } from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { startLoginEmailPassword, startGoogleLogin } from '../../actions/auth';

const LoginScreen = () => {
	const dispatch = useDispatch();

	const [formValues, handleInputChange] = useForm({
		email: 'nando@gmal.com',
		password: '123456',
	});

	const { email, password } = formValues;

	const handleLogin = (e) => {
		e.preventDefault();
		dispatch(startLoginEmailPassword(email, password));
	};

	const handleGoogleLogin = () => {
		console.log('Cilck hereeeee');
		dispatch(startGoogleLogin());
	};

	return (
		<>
			<h3 className='auth__title'>Login</h3>

			<form className='auth__form' onSubmit={handleLogin}>
				<input
					className='auth__input'
					type='text'
					placeholder='Email'
					name='email'
					autoComplete='off'
					value={email}
					onChange={handleInputChange}
				/>
				<input
					className='auth__input'
					type='password'
					placeholder='Password'
					name='password'
					value={password}
					onChange={handleInputChange}
				/>
				<button className='btn btn-primary btn-block' type='submit'>
					Login
				</button>

				<div className='auth__networks' onClick={handleGoogleLogin}>
					<p>Login with social networks</p>

					<div className='google-btn'>
						<div className='google-icon-wrapper'>
							<img
								className='google-icon'
								src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
								alt='google button'
							/>
						</div>
						<p className='btn-text'>
							<b>Sign in with google</b>
						</p>
					</div>
				</div>

				<Link className='auth__link' to={Routes.AUTH_REGISTER}>
					Create new account
				</Link>
			</form>
		</>
	);
};

export default LoginScreen;
