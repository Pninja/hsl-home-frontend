import React, { Component } from 'react';
import './App.css';
import { Container } from 'semantic-ui-react'
// import Header from './Header'
import TimeTable from './TimeTable'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      arrivals: null,
      time: null
    }
  }

  componentDidMount() {
    // Register event listener: TODO
    // Set current time
    setInterval(
      () => this.setTime(),
      1000
    );
    
  }

  componentWillUnmount() {
    // Unregister event listener: TODO
  }

  setTime() {
    const time = new Date()
    const clock = time.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    this.setState({ time: clock })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Container className="main-container">
            <TimeTable time={this.state.time}/>
          </Container>
        </header>
      </div>
    );
  }
}

export default App;
