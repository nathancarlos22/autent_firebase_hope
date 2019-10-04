import React, { Component} from 'react';
import fire from '../Fire'
import administra from '../admin'
import '../App.css';
import{Form , FormGroup, Label, Input, Button } from 'reactstrap';

class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);  
        this.listAllUsers = this.listAllUsers.bind(this) ;
        //this.verifyToken = this.verifyToken.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            email: '',
            senha: '',
            userType:'',
            Token: ''
        }
    }

    logout(){
        fire.auth().signOut();
    }
    
    /* verifyToken() {
        fire.auth().currentUser.getIdToken(true).then(function(idToken) {
            administra.auth().verifyIdToken(idToken)
            .then(function(decodedToken) {
                let uid = decodedToken.uid;
                console.log(uid);
                this.listAllUsers(uid);
            });
            // Send token to your backend via HTTPS
            // ...
            
          }).catch(function(error) {
            console.log('Erro na verificacao do token:', error);
          });
    } */
    
    listAllUsers(nextPageToken) {
        nextPageToken = nextPageToken.Token;
        administra.auth().listUsers(1000, nextPageToken)
          .then((listUsersResult) => {            
            
            listUsersResult.users.forEach((userRecord)=> {
              console.log('user', userRecord.toJSON());
            });
            
            if (listUsersResult.pageToken) {
              this.listAllUsers(listUsersResult.pageToken);
            }
          })
          .catch((error) => {
            console.log('Error listing users:', error);
          });
      }

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
            <Button onClick={this.listAllUsers} color="primary"> Editar </Button>
            <Button onClick={this.listAllUsers} color="primary"> Excluir </Button>
            {/*<Button> Editar </Button>*/}
        </div>
        );
    }
}
export default Home;