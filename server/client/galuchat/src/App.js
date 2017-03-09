import React, { Component } from 'react';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Form from './Form.js'
import Percentage from './Percentage.js'

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
            <Form />
            <hr className="separator" />
            <Percentage />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
