import React, { Component } from 'react';
import './App.css';
import { Container } from 'semantic-ui-react'
import TimeTable from './TimeTable'
import socketIOClient from 'socket.io-client'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      arrivals: null,
      time: null
    }
  }

  componentDidMount() {
    // Register event listener
    this.registerSocket()
    // Set current time
    setInterval(() => this.setTime(), 1000);
  }

  componentWillUnmount() {
    // Unregister event listener
  }

  registerSocket() {
    const endpoint = 'http://localhost:6009'
    const socket = socketIOClient(endpoint)
    socket.on('connect', () => console.log('connected!'))
    socket.on('FromAPI', data => this.eventHandler(data))
  }

  eventHandler(data) {
    // Handle event data
    this.setState({arrivals: data})
  }

  setTime() {
    // Set current time
    const time = new Date()
    const clock = time.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    this.setState({ time: clock })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Container className="main-container">
            <TimeTable time={this.state.time} arrivals={this.state.arrivals}/>
          </Container>
        </header>
      </div>
    );
  }
}

export default App;
