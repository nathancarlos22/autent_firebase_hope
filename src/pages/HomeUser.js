import React, { Component} from 'react';
import fire from '../Fire'
import '../App.css';
import{Form , FormGroup, Label, Input, Button } from 'reactstrap';

class HomeUser extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);  
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            email: '',
            senha: '',
            uid:'',
    
        }
    }

    logout(){
        fire.auth().signOut();
    }
    
    Excluir() {
        var user = fire.auth().currentUser;

        fire.database().ref('users').once('value', function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
              var childKey = childSnapshot.key;  // pega a key e os filhos do banco de dados
              var childData = childSnapshot.val();
              
              if(childData.userId == user.uid) { //se o id do banco de dados for igual ao digitado
                
                fire.database().ref('users/' + childKey).remove().then(function(){
                    alert("uid: " + childData.userId + "key: " + childKey +"usuario deletado no banco de dados");
                }); 
                
                user.delete().then(function() {
                    alert("usuario deletado no autenticador");
                }).catch(function(error) {
                    alert(error);
                });
              }
            });
        });
    } 
    
    EditarSenha(){
        var txt;
        var senhaModify = prompt("Edite sua senha:", "password");

        if (senhaModify == null ||senhaModify == "") {
            txt = "User cancelled the prompt.";
        } else {
            fire.auth().currentUser.updatePassword(senhaModify)
            .then(function() {
                alert("Sucesso na atualização ")
            })
            .catch(function(error) {
                alert("Você precisa fazer o login para excluir a conta!");
                alert(error);
            });  
            
        }
    }
    
    handleChange(e){
        this.setState({ [e.target.name]: e.target.value });
    }

    render(){
        return (
        <div className = "col-md-6">
            <h1>Home user</h1>
            <FormGroup>
                <button id="LogoutButton" onClick= {this.logout}>Logout</button>
            </FormGroup>
            
            <Button onClick={this.EditarSenha} color="primary"> Editar sua senha</Button>
            <Button onClick={this.Excluir} color="primary"> Excluir sua conta</Button>
            
        </div>
        );
    }
}
export default HomeUser;