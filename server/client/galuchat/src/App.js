import React, { Component } from 'react';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Form from './Form.js'

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
            <div className="App-header">
              <h2>Au fait, combien ça fait en minutes ?</h2>
            </div>
            <Form />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
