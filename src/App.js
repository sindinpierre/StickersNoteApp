import React, { Component } from 'react'
import Clock from 'react-live-clock';
//import ReactDOM from 'react-dom'
import './App.css'
import {Board}              from "./Board"

class App extends Component {
  render() {
    return (
      <div id="App">
        <header id="App-header">
            <h1 style={{"textAlign":"center"}}>Board de Pierre Sindin</h1>


            <div id={"Date"}><Clock format={'HH:mm:ss'} ticking={true}  /></div>
        </header>
          <Board/>
      </div>
    )

  }
}
export default App
