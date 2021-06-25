import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, Component} from 'react';
import { Button, Grid, TextField } from '@material-ui/core';

class ToggleButton extends Component{
  
  constructor(props : myProps){
    super(props);
    this.state ={}

    

  }
  handleClick(){
      // POST request using fetch inside useEffect React hook
      //const form: HTMLFormElement = document.querySelector('#loginform');
      //const formData = new FormData(form);
      //const passwordForm= formData.get('password') as string;
      //const usernameForm = formData.get('email') as string;
      //const requestOptions = {
      //    method: 'POST',
      //    headers: { 'Content-Type': 'application/json' },
      //    body: JSON.stringify({ username: usernameForm, password:passwordForm})
      //};
      fetch('/toggle').then(response => response.json());
          //.then(data => localStorage.setItem('jwt', data.access_token));

      


  
  // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }
  render()
  {
    return (
    
        <div id="Toggle">
        <Button
          onClick={this.handleClick}
          fullWidth
          variant="contained"
          color="primary"
          className="submit"
        >
          Toggle!
        </Button>
        </div>    
    )
  }
}




function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a> &nbsp;</a>
        <ToggleButton/>
        <p>The current time is {currentTime}.</p>
      </header>
    </div>
  );
}

export default App;
