import React, { Component } from 'react'
import Clock from 'react-live-clock';
//import ReactDOM from 'react-dom'
import './App.css'
import {Board}              from "./Board"
import {Error}              from "./Error"

class App extends Component {
    state = {
        errorList: ["error1","error2"],
    }
    render() {
    return (
      <div id="App">
        <header id="App-header">
            <h1 style={{"textAlign":"center"}}>Board de Pierre Sindin</h1>


            <div id={"Date"}><Clock format={'HH:mm:ss'} ticking={true}  /></div>
        </header>
          <Board addError={this.addError}/>

      </div>
    )
    //<Error errorList={this.state.errorList}/>}
  }
    addError(errMsg) {
        if(this.state.errorList.find(value => value ===errMsg)){

        } else {
            let oldError = this.state.errorList
            let newError = oldError.concat(errMsg)
            this.setState(newError)
        }
    }
}
export default App
