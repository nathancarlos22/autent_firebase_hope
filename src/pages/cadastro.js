import React, { Component} from 'react';
import{Form , FormGroup, Label, Input, Button } from 'reactstrap';
import fire from '../Fire'
import { Link } from 'react-router-dom'

class Cadastro extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.signUp = this.signUp.bind(this);
        
        this.state = {
            email: '',
            senha: '',
            
        }
    }

signUp() { /* Cadastra */

    var mod = false;
    var email = document.querySelector('#email').value;
    var password = document.querySelector('#password').value;

    fire.auth().createUserWithEmailAndPassword(email, password)
    .then((u) => {
        alert("sucesso ao cadastrar");
        fire.database().ref('users').push({
            mod: mod,
            email: fire.auth().currentUser.email,
            userId: fire.auth().currentUser.uid,

        })
        fire.auth().signOut();
        email = '';
        password = '';
        mod='';
    })
    .catch((err) => {
        alert("error: " + err.toString());
    })
   
}

handleChange(e){ /* "fisga" o valor e altera*/
    this.setState({ [e.target.name]: e.target.value });
}

    render() {
        return (
            <div className="col-md-7">
                <h1>Cadatro</h1>                        
                <Form className="col-md-7">
                    <FormGroup>
                        <Label for ="email">Email</Label>
                        <Input id= "email" value={this.state.email} onChange={this.handleChange} type="email" name="email"placeholder="Digite seu email"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for ="password">Senha</Label>
                        <Input id="password" value={this.state.senha} onChange={this.handleChange} type="password" name="senha" placeholder="Digite sua senha"/>
                        
                    </FormGroup>
                    <FormGroup>
                        <Button onClick={this.signUp} > Cadastrar </Button>
                        <Link to="/"><Button>Voltar</Button> </Link>
                    </FormGroup>
                </Form>
            </div>
          );
    }
  }
  export default Cadastro;