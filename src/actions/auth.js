import { types } from '../types/types';
import { googleAuthProvider } from '../firebase/firebase-config';
import { firebase } from '../firebase/firebase-config';

export const startLoginEmailPassword = (email, password) => {
	return (dispatch) => {
		setTimeout(() => {
			dispatch(login(123, 'Pedro'));
		}, 3500);
	};
};

export const login = (uid, displayName) => {
	return {
		type: types.login,
		payload: {
			uid,
			displayName,
		},
	};
};

export const startGoogleLogin = () => {
	return (dispatch) => {
		firebase
			.auth()
			.signInWithPopup(googleAuthProvider)
			.then(({ user }) => {
				dispatch(login(user.uid, user.displayName));
			});
	};
};
