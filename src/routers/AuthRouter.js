import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import * as Routes from './routes';
import LoginScreen from '../components/auth/LoginScreen';
import RegisterScreen from '../components/auth/RegisterScreen';

const AuthRouter = () => {
	return (
		<div className='auth__main'>
			<div className='auth__box-container'>
				<Switch>
					<Route path={Routes.AUTH_LOGIN} component={LoginScreen} />
					<Route path={Routes.AUTH_REGISTER} component={RegisterScreen} />

					<Redirect to={Routes.AUTH_LOGIN} />
				</Switch>
			</div>
		</div>
	);
};

export default AuthRouter;
