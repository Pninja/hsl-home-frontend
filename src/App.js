import React, { Component } from 'react';
import './App.css';
import { Container } from 'semantic-ui-react'
import TimeTable from './TimeTable'
// import Header from './Header'
import socketIOClient from 'socket.io-client'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      arrivals: null,
      time: null,
      disconnected: false
    }
  }

  componentDidMount() {
    // Register event listener
    this.registerSocket()
    // Set current time
    setInterval(() => this.setTime(), 1000);
  }

  registerSocket() {
    const endpoint = 'http://localhost:6009'
    const socket = socketIOClient(endpoint)
    socket.on('connect', () => {
      console.log('connected!')
      this.setState({disconnected: false})
    })
    socket.on('FromAPI', data => this.setState({arrivals: data}))
    socket.on('disconnect', () => this.setState({ arrivals: null, disconnected: true }))
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
            <TimeTable 
              time={this.state.time} 
              arrivals={this.state.arrivals} 
              disconnected={this.state.disconnected}
            />
          </Container>
        </header>
      </div>
    );
  }
}

export default App;
