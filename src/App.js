import React from "react";
import UserForm from './components/Main/index';
import { Provider } from 'react-redux';
import store from './store';
const App = () => {


  return (
    <Provider store={ store } >
      <UserForm />
    </Provider>
  );
}

export default App;
