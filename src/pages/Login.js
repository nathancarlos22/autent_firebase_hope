import React, {Component} from 'react';
import{Form , FormGroup, Label, Input, Button } from 'reactstrap';
import fire from '../Fire';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
  } from "react-router-dom";
  import cadastro from './cadastro.js'
  import App from '../App'

{/*import { BrowserRouter as Router, Route, Link } from "react-router-dom";*/}

export default class login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signUp = this.signUp.bind(this);
        this.state = {
            email: '',
            senha: '',
        }
    }

    login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.senha).then((u) =>{
        }).catch((error) =>{
            alert(error);
        });
    }
    handleChange(e){
        this.setState({ [e.target.name]: e.target.value });
    }
    signUp() {
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;

        fire.auth().createUserWithEmailAndPassword(email, password)
        .then((u) => {
            alert("sucesso ao cadastrar");
        })
        .catch((err) => {
            alert("error: " + err.toString());
        })
            
    }
    render() {
        return (
            <Router>
                <div className="col-md-6">
                    <h1>Login</h1>                        
                    <Form>
                        <FormGroup>
                            <Label for ="email">Email</Label>
                            <Input id= "email" value={this.state.email} onChange={this.handleChange} type="email" name="email"placeholder="Digite seu email"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for ="password">Senha</Label>
                            <Input id="password" value={this.state.senha} onChange={this.handleChange} type="password" name="senha" placeholder="Digite sua senha"/>
                        </FormGroup>
                        <FormGroup>
                            <Button onClick={this.login} > Entrar </Button>
                            <Link to = "/Cadastro"> 
                                <Button>Cadastrar</Button> 
                            </Link>
                            {/*<Button onClick={this.signUp}> Cadastrar</Button>*/}
                        </FormGroup>
                    </Form>
                    <hr/>
                    {<Route exact path="/Cadastro" component={cadastro} />}
                    
                </div>
            </Router>

            
            
        );
    }
}