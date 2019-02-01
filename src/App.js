import React, { Component } from 'react'
import Clock from 'react-live-clock';
//import ReactDOM from 'react-dom'
import './App.css'
import {Board}              from "./Board"
import {Error}              from "./Error"

const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
export const myEvent = new MyEmitter()

class App extends Component {
    state = {
        errorList: [],
    }
    render() {
    return (
      <div id="App">
        <header id="App-header">
            <h1 style={{"textAlign":"center"}}>Board de Pierre Sindin</h1>


            <div id={"Date"}><Clock format={'HH:mm:ss'} ticking={true}  /></div>
        </header>
          <Board/>
          <Error errorList={this.state.errorList}/>
      </div>
    )
    //<Error errorList={this.state.errorList}/>}
  }
  componentDidMount() {
      myEvent.on('error',(err) => {
          this.addError(err)
      })
  }
  componentWillUnmount() {
      myEvent.removeListener('error',() => {})

  }

    addError(errMsg) {
        if(this.state.errorList.find(value => value ===errMsg.toString())){

        } else {
            let oldError = this.state.errorList
            let newError = oldError.concat(errMsg.toString())
            this.setState({errorList:newError})
        }
    }
}
export default App
