import React, {Component} from 'react';
import{Form , FormGroup, Label, Input, Button } from 'reactstrap';
import fire from '../Fire';

{/*import { BrowserRouter as Router, Route, Link } from "react-router-dom";*/}

export default class login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
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
    render() {
        return (
            <div className="col-md-6">
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
                        <select>
                            <option>Selecione a forma de login</option>
                            <option>Especialista</option>
                            <option> Admin </option>
                            
                        </select>
                        </FormGroup>
                        <Button onClick={this.login} color="primary"> Entrar </Button>
                    </Form>
                

            </div>
            
        );
    }
}