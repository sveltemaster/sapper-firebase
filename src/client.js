import * as sapper from '@sapper/app';
import firebase from 'firebase/app';
import 'firebase/database';

sapper.start({
	target: document.querySelector('#sapper')
})

var firebaseConfig = {
	apiKey: "AIzaSyAHhPFO5uyGDpg2lexpWxW3pYeI762kUD4",
	authDomain: "for-511da.firebaseapp.com",
	databaseURL: "https://for-511da.firebaseio.com",
	projectId: "for-511da",
	storageBucket: "for-511da.appspot.com",
	messagingSenderId: "499446205047",
	appId: "1:499446205047:web:00cc020b3067c9c972d472"
	};
	// Initialize Firebase
	firebase.initializeApp(firebaseConfig);
