import React, { Component} from 'react';
import{Form , FormGroup, Label, Input, Button } from 'reactstrap';
import fire from '../Fire'
import administra from '../admin'

class cadastro extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.signUp = this.signUp.bind(this);
        this.state = {
            email: '',
            senha: '',
        }
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
handleChange(e){
    this.setState({ [e.target.name]: e.target.value });
}
    render() {

        return (
            <div>
              <h2>Cadastro</h2>
              <Form>
                        <FormGroup>
                            <Label for ="email">Email</Label>
                            <Input id= "email" value={this.state.email} onChange={this.handleChange} type="email" name="email"placeholder="Digite seu email"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for ="password">Senha</Label>
                            <Input id="password" value={this.state.senha} onChange={this.handleChange} type="password" name="senha" placeholder="Digite sua senha"/>
                        </FormGroup>
                        <FormGroup id= "ButtomsLogin">
                            {<Button onClick={this.signUp}> Cadastrar</Button>}
                        </FormGroup>
                    </Form>
            </div>
          );
    }
  }

export default cadastro;