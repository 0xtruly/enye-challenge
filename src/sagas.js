import { put, take,fork, takeEvery} from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import firebase from "firebase";
import { app } from './statemanagement/sendUserData';

import {ApiRequest} from './components/Api/index';


 
const db = firebase.database(app);//firebase database service

/**create new user on form submit
 * and send it to the database
 */

function* createUserAsync(data) {
  try {
    yield put({ type: "Sending" });
    yield ApiRequest(data.payload);
    yield put({ type: "Saved"});
  } catch (err) {
    yield put({ type: "ERROR_SENDING" });
    console.log("something went wrong");
  }
}

/**listen for changes in the database
 * and send the updated data back
 */
function* startListener() {
 
  const channel = new eventChannel(emiter => {
    const listener = db.ref("userDetails").on("value", snapshot => {
      emiter({ data: snapshot.val() || {} });
    });

    return () => {
      listener.off();
    };
  });

  while (true) {
    const { data } = yield take(channel);

    /**mapping through the data contained 
     * in the event channel
     */
    const fetchedData = Object.keys(data).map((el, i) => data[el]);

    /**set the most recent data at
     * the top of the table
     */
    yield put({ type: "asyncRequest", payload: fetchedData.reverse() });
  }
}


export default function* saga() {
  yield takeEvery("submit", createUserAsync);
  yield fork(startListener);
}