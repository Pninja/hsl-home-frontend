import React, { Component } from 'react';
import './App.css';
import { Container } from 'semantic-ui-react'
import Header from './Header'
import TimeTable from './TimeTable'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      arrivals: null
    }
  }

  componentDidMount() {
    // Register event listener
  }

  componentWillUnmount() {
    // Unregister event listener
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Container className="main-container">
            <TimeTable className="timetable"/>
          </Container>
        </header>
      </div>
    );
  }
}

export default App;
