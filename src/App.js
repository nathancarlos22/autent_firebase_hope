import React, {Component} from 'react';
import './App.css';
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import fire from './Fire.js';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      user:{},
      
    }
  }
  
  componentDidMount() {
    this.authListener();
  }
  
  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({ user });
        
      }else {
        this.setState({ user: null })
      }
    });
  }

  render(){
    return (
      <div className ="App">
        
        {this.state.user ? (<Home/>) : (<Login/>)}
      
      </div>
    );
  }
}

export default App;