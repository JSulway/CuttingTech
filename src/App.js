import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Store from './Store';
import Home from "./Home"

class App extends Component {
  render() {
    return (
       <Provider store={Store}>
	       <Home />
       </Provider>
	  );
  }
}

export default App;
