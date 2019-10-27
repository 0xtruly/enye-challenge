import firebase from 'firebase';

export const  config = {
    apiKey: "AIzaSyBp69WOXZqZcJt3XiiNRTxwW0i8bO6Iyus",
    authDomain: "enye-challenge2.firebaseapp.com",
    databaseURL: "https://enye-challenge2.firebaseio.com/",
    projectId: 'enye-challenge2',
    storageBucket: "enye-challenge2.appspot.com"
  };

  export const app = firebase.initializeApp(config);

  let formData = firebase.database().ref('/userDetails');

 export const sendData = (data) => {

    let newFormMessage = formData.push();
    newFormMessage.set({
     ...data
    });
  }

  export {formData}