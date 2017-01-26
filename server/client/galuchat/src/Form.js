import React, { Component } from 'react';
import './App.css';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0,
      resultSeconds: 0,
      resultMinutes: 0,
    }
  }

  updateText = (event) => {
    this.setState({ number: event.target.value });
  }

  submit = () => {
    const seconds = this.state.number % 60;
    console.log(seconds);
    this.setState({
      resultSeconds: this.state.number % 60,
      resultMinutes: (this.state.number - seconds) / 60,
    });
  }

  render() {
    return (
      <div className="body">
          <TextField
            type='number'
            value={this.state.number}
            floatingLabelText="Nombre de secondes"
            onChange={this.updateText}
          /><br />
          <RaisedButton
            label="Combien de minutes ça fait ?"
            onClick={this.submit}
            secondary
          />
          <br />
          <br />
          <p className="result">
            {this.state.resultMinutes} minutes {this.state.resultSeconds} secondes
          </p>
      </div>
    );
  }
}

export default Form;
