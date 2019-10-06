import React, { Component} from 'react';
import fire from '../Fire'
import '../App.css';
import{Form , FormGroup, Label, Input, Button } from 'reactstrap';

class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);  
        //this.listAllUsers = this.listAllUsers.bind(this) ;
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            email: '',
            senha: '',
            userType:'',
        }
    }

    logout(){
        fire.auth().signOut();
    }
    
    Excluir() {
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;

        fire.auth().signInWithEmailAndPassword(email, password).then((u) =>{
        }).catch((error) =>{
            alert(error);
        });

        var user = fire.auth().currentUser;
        user.delete().then(function() {
            }).catch(function(error) {
        });
    } 
    
    /* listAllUsers(nextPageToken) {
        fire.auth().listUsers(1000, nextPageToken)
        .then(function(listUsersResult) {
            listUsersResult.users.forEach(function(userRecord) {
            console.log('user', userRecord.toJSON());
            });
            //if (listUsersResult.pageToken) {
            //this.listAllUsers(listUsersResult.pageToken);
            //}
        })
        .catch(function(error) {
            console.log('Error listing users:', error);
        });
      } */

      Adicionar() {
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
    
    Editar(){
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;

        fire.auth().signInWithEmailAndPassword(email, password).then((u) =>{
        }).catch((error) =>{
            alert(error);
        });

        var txt;
        
        var emailModify = prompt("Edite seu email:", email);
        var senhaModify = prompt("Edite sua senha:", password);

        if (emailModify == null ||emailModify == "" || senhaModify == null ||senhaModify == "") {
            txt = "User cancelled the prompt.";
        } else {
            var user = fire.auth().currentUser;
                user.updateProfile({
                email: emailModify,
                password: senhaModify
            }).then(function() {
            alert("Sucesso na atualização ")
            }).catch(function(error) {
                alert(error);
            });
        }
    }
    
    handleChange(e){
        this.setState({ [e.target.name]: e.target.value });
    }

    render(){
        return (
        <div>
            <h1>Home</h1>
            <button id="LogoutButton" onClick= {this.logout}>Logout</button>
            <Form>
                <FormGroup>
                    <Label for ="email">Email</Label>
                    <Input id= "email" value={this.state.email} onChange={this.handleChange} type="email" name="email"placeholder="Email"/>
                </FormGroup>
                <FormGroup>
                    <Label for ="password">Senha</Label>
                    <Input id="password" value={this.state.senha} onChange={this.handleChange} type="password" name="senha" placeholder="Senha"/>
                </FormGroup>                
            </Form>
            <Button onClick={this.Adicionar} color="primary" > Adicionar </Button>
            <Button onClick={this.listAllUsers} color="primary"> Listar </Button>
            <Button onClick={this.Editar} color="primary"> Editar </Button>
            <Button onClick={this.Excluir} color="primary"> Excluir </Button>
            {/*<Button> Editar </Button>*/}
        </div>
        );
    }
}
export default Home;