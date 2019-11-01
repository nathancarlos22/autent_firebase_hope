import React, { Component} from 'react';
import fire from '../Fire'
import '../App.css';
import{Form , FormGroup, Label, Input, Button } from 'reactstrap';

class HomeAdmin extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);  
        this.listAllUsers = this.listAllUsers.bind(this) ;
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            email: '',
            senha: '',
            
        }
    }

    logout(){
        fire.auth().signOut();
    }
    
    Excluir() {
        
    } 
    
    listAllUsers() {
        fire.database().ref('users').on('value',(data) => {
            
            let users = data.val();
            let keys = data.key;
            document.getElementById('tableUsers').innerHTML='';

            for (const user in users) {
                document.getElementById('tableUsers').innerHTML+=`
                <tr>
                <td>${users[user].email} </td>
                <td>${users[user].mod} </td>
                <td>${users[user].userId} </td>
              </td>
                `;
                console.log(users[user].userId);
            }
            
        });
        fire.database().ref('users').once('value', function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
              var childKey = childSnapshot.key;
              var childData = childSnapshot.val();
              
              console.log(childKey);
              console.log(childData);
            });
          });

    
    }
      Adicionar() {
        var mod = document.getElementById("CheckAdmin").checked;
        var email = document.querySelector('#email').value;
        var password = document.querySelector('#password').value;

        var firebaseRef = fire.database().ref('users');

        fire.auth().createUserWithEmailAndPassword(email, password)
        .then((u) => {
            firebaseRef.push({
                mod: mod,
                email: fire.auth().currentUser.email,
                userId: fire.auth().currentUser.uid,
        })
        
        email = '';
        password = '';
        mod='';
        })
        .catch((err) => {
            alert("error: " + err.toString());
        })
    }
    
    Editar(){
        var email = document.getElementById('email').value;
        alert(email);
        
    }
    Excluir () {
        var userId = prompt("Digite o id para excluir:", "uid");

         if (userId == null ||userId == "") {
            alert("Usuario cancelou o prompt.");
        } else {
            fire.database().ref('users/' + userId).remove()
            .then(function() {
                alert("Sucesso na atualização ")
            })
            .catch(function(error) {
                alert(error);
            });  
        }
        /* pra pegar o usuario conectado 
         const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;

        fire.auth().signInWithEmailAndPassword(email, password).then((u) =>{
        }).catch((error) =>{
            alert(error);
        });

        var user = fire.auth().currentUser;
        user.delete().then(function() {
            }).catch(function(error) {
        }); */
    }
    
    handleChange(e){
        this.setState({ [e.target.name]: e.target.value });
    }

    render(){
        return (
        <div>
             
            <FormGroup>
                <h1>Home Admin</h1>
                <button id="LogoutButton" onClick= {this.logout}>Logout</button>
            </FormGroup>
             <Form>
                 <FormGroup>
                    <Label for ="email">Email</Label>
                    <Input id= "email" value={this.state.email} onChange={this.handleChange} type="email" name="email"placeholder="Email"/>
                </FormGroup>
                
                <FormGroup>
                    <Label for ="password">Senha</Label>                    
                    <Input id="password" value={this.state.senha} onChange={this.handleChange} type="password" name="senha" placeholder="Senha"/>
                    <Input type="checkbox" id="CheckAdmin" value="Admin" /* onChange={this.admin} *//> Admin?
                </FormGroup>

                <Button onClick={this.Adicionar} color="primary" > Adicionar </Button> 
                <Button onClick={this.listAllUsers} color="primary"> Listar </Button>  
                <Button onClick={this.Editar} color="primary"> Editar</Button>
                <Button onClick={this.Excluir} color="primary"> Excluir</Button>
                
                <FormGroup className='col-md-8'>
                    <table className="table table-bordered p-3 m-3">
                        <thead >
                            <tr>
                                <th scope ='col'>Email</th>
                                <th scope ='col'>Admin?</th>
                                <th scope ='col'>Id</th>

                            </tr>
                        </thead>
                        
                        <tbody id = "tableUsers">
                    
                        </tbody>
                    </table>
                </FormGroup>                 
            </Form>
             
              
        </div>
        );
    }
}
export default HomeAdmin;