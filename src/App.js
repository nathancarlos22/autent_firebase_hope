import React, {Component} from 'react';
import './App.css';
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import fire from './Fire.js';
import Cadastro from './pages/cadastro.js';
import { Link } from 'react-router-dom'
import{ Button } from 'reactstrap';
import Home1 from './pages/Home1';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user:{},
      UserType:'User'
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
/* 
  Especialista() {
    if(this.user1) {
      this.setState( this.user1 );
    }else {
      this.setState( { user1: null} )
    }
  } */

  render(){
    return (
      <div className ="App">
        {this.state.user ? (<Home/>) : (<Login/>)}
        <Link to="/cadastro"><Button>Fazer cadastro</Button> </Link>
        

      </div>
    );
  }
}

export default App;