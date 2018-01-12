import React, { Component } from 'react';
import Header from "./Header"
import './App.css';

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: "",
            password: "",
            message: ""
        }
        
        this._onUsernameChange = this._onUsernameChange.bind(this);
        this._onPasswordChange = this._onPasswordChange.bind(this);
        this._login = this._login.bind(this);
    }
    
    _onUsernameChange(e){
        this.setState({username:e.target.value})
    }
    
    _onPasswordChange(e){
        this.setState({password:e.target.value})
    }
    
    _login(){
        this.setState({message:this.state.username + ", " + this.state.password})
    }
    
  render() {
    return (
      <div className="App">
        <Header/>
        <div>
            <input className="app-input" type="text" onChange={this._onUsernameChange}/>
        </div>
        <div>
            <input className="app-input" type="password" onChange={this._onPasswordChange}/>
        </div>
        <button className="app-button" onClick={this._login}>Login, yo</button>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default App;
