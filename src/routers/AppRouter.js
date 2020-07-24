import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import * as Routes from './routes';
import AuthRouter from './AuthRouter';
import JournalScreen from '../components/journal/JournalScreen';

const AppRouter = () => {
	return (
		<Router>
			<Switch>
				<Route path={Routes.AUTH} component={AuthRouter} />
				<Route exact path={Routes.DEFAULT} component={JournalScreen} />

				<Redirect to={Routes.AUTH_LOGIN} />
			</Switch>
		</Router>
	);
};

export default AppRouter;
