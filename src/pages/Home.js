import React, { Component} from 'react';
import fire from '../Fire'
import '../App.css';
import HomeUser from './HomeUser';
import administra from '../admin.js'
import HomeAdmin from './HomeAdmin';
import{Form , FormGroup, Label, Input, Button } from 'reactstrap';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {},
            email: '',
            senha: '',
            uid:'',
            admin:{}
        }
    }

    componentDidMount() {
        this.authListener();
      }
      
      authListener() {
        fire.auth().onAuthStateChanged(function(user) {
          if (user) {
            console.log("conectado");
          } else {
            console.log("desconectado");
          }
        });

        
      }
        
      listAllUsers(nextPageToken) {
        administra.auth().listUsers(1000, nextPageToken)
        .then(function(listUsersResult) {
          
            listUsersResult.users.forEach(function(userRecord) {
              console.log('user', userRecord.toJSON());
            });
            if (listUsersResult.pageToken) {
              this.listAllUsers(listUsersResult.pageToken);
            }
        })
        .catch(function(error) {
            console.log('Error listing users:', error);
        });
      }  

    render(){
        return (
        <div className = "col-md-6">
          <Button onClick={this.listAllUsers} > Listar </Button>
            {this.state.user ? (<HomeUser/>) : (<HomeAdmin/>)}
        </div>
        );
    }
}
export default Home;