import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';



const config = {
    apiKey: "AIzaSyCyO5i3M3Rpu0pXCpGVHviyRS6yEY_xfOE",
    authDomain: "dream-69693.firebaseapp.com",
    databaseURL: "https://dream-69693.firebaseio.com",
    projectId: "dream-69693",
    storageBucket: "dream-69693.appspot.com",
    messagingSenderId: "577227641216"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

/*
jak chcesz wbazce

trzymac tez ta liczbe

pushowac i odczytywac
trzymac w sumie caly obiekt item
ktory bedzie mial takie properties
jak
obj ={ number, name }

i tablica takich obiektow to bedzie twoja tablica
na onClicku

dodajesz + 1 do state np
i wysylasz do bazy


 */