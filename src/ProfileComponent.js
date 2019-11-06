import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './navBar'
import Card from 'react-bootstrap/Card'
import ghlogo from './github.png';

class ProfileComponent extends React.Component {
    renderHeader(){
        return (<NavBar/>)
    }
    render(){
        return (
            <Card style={{ width: '30rem' }}>
            <Card.Img variant="top" width="30%" height="30%" src={ghlogo} />
            <Card.Body>
            {this.renderHeader()}
            </Card.Body>
            </Card>
            )
    }
}
export default ProfileComponent