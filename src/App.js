import React, { Component } from 'react';
import './App.css';
import { Container } from 'semantic-ui-react'
// import Header from './Header'
import TimeTable from './TimeTable'
import socketIOClient from 'socket.io-client'
// import { registerEventListener, unregisterEventListener } from './services/hsl.service'

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
    const endpoint = 'http://127.0.0.1:6009'
    // const socket = socketIOClient(endpoint)
    // socket.on("FromAPI", data => this.eventHandler(data))
    // registerEventListener(this.eventHandler)
    // Set current time
    setInterval(
      () => this.setTime(),
      1000
    );
    
  }

  componentWillUnmount() {
    // Unregister event listener
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
