// Firebase configuration

import firebase from 'firebase/app';
import 'firebase/firestore';
// import 'firebase/storage';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyDRNscvyAJWG8BtnpCBw3tCpYEWem2jSAw',
	authDomain: 'arduino-sensors-754e5.firebaseapp.com',
	databaseURL: 'https://arduino-sensors-754e5.firebaseio.com',
	projectId: 'arduino-sensors-754e5',
	storageBucket: 'arduino-sensors-754e5.appspot.com',
	messagingSenderId: '940139731983',
	appId: '1:940139731983:web:3f15975a429e3d9ad7577a'
};

// Initialize Firebase
// firebase.firestore().settings({ timestampsInSnapshots: true });

class Firebase {
	constructor() {
		firebase.initializeApp(config);
		this.auth = firebase.auth();
	}

	// Signup
	async signup({ email, password, firstName, lastName }) {
		let user;
		try {
			user = await firebase.auth().createUserWithEmailAndPassword(email, password);
			user.user.updateProfile({
				displayName: `${firstName} ${lastName}`
			});
		} catch (error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			if (errorCode == 'auth/weak-password') {
				alert('The password is too weak.');
			} else {
				alert(errorMessage);
			}
			console.log('TCL: Firebase -> signup -> error', error);
		}
		return user;
	}

	// Singin
	async signin(email, password) {
		let user;
		try {
			user = await firebase.auth().signInWithEmailAndPassword(email, password);
		} catch (error) {
			var errorCode = error.code;
			var errorMessage = error.message;
			if (errorCode === 'auth/wrong-password') {
				alert('Wrong password.');
			} else {
				alert(errorMessage);
			}
			console.log('TCL: Firebase -> signin -> error', error);
		}
		return user;
	}

	// Singout
	async signout(email, password) {
		try {
			await firebase.auth().signOut();
		} catch (error) {
			console.log('TCL: Firebase -> signout -> error', error);
		}
	}
}

export default new Firebase();
