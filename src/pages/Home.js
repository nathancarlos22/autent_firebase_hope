import React, { Component} from 'react';
import fire from '../Fire'
import '../App.css';
import HomeUser from './HomeUser';
import HomeAdmin from './HomeAdmin';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
          admin: ''
          
        }
      }
      componentDidMount() {
        this.VerificaAdmin();
      }

      VerificaAdmin() {
        fire.auth().onAuthStateChanged((user) => {
          var userConectado = fire.auth().currentUser;

          if(user) {
            fire.database().ref('users').once('value',(data) => {
              let users = data.val();
    
              for (const user in users) {
                  if(users[user].userId === userConectado.uid) {
                    this.setState({ admin: users[user].mod });
                    console.log(users[user].userId, users[user].mod);
                  }
              }
            });
            
          }else {
            this.setState({ admin: null })
          }
        });
      }

    render(){
        return (
        <div className = "col-md-6">
            {this.state.admin ? (<HomeAdmin/>) : (<HomeUser/>)}
            
        </div>
        );
    }
}
export default Home;