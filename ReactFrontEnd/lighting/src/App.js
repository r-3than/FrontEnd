import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, Component} from 'react';
import { Button, Grid, TextField } from '@material-ui/core';

class ToggleButton extends Component{
  
  handleClick(){
      fetch('/toggle').then(response => response.json());
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

class SkipButton extends Component{
  
  handleClick(){
      fetch('/skip').then(response => response.json());
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
          Next!
        </Button>
        </div>    
    )
  }
}

class BackButton extends Component{
  
  handleClick(){
      fetch('/back').then(response => response.json());
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
          Back!
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
        <BackButton/> <ToggleButton/> <SkipButton/>
        <p>The current time is {currentTime}.</p>
      </header>
    </div>
  );
}

export default App;
