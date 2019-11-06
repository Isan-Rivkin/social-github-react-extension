import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './navBar'
import Card from 'react-bootstrap/Card'
import ghlogo from './github.png';

class ProfileComponent extends React.Component {
    renderHeader(){
        return (<NavBar onDeleteAccount={this.props.onDeleteAccount}/>)
    }
    getAvatar(){
        const user = JSON.parse(localStorage.getItem('user'))
        if(user){
            return user.avatar
        }
        return ghlogo
    }
    render(){
        return (
            <Card style={{ width: '40rem' }}>
            <Card.Img variant="top" width="30%" height="30%" src={this.getAvatar()} />
            <Card.Body>
            {this.renderHeader()}
            </Card.Body>
            </Card>
            )
    }
}
export default ProfileComponent