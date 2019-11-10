
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card'
import ghlogo from './github.png';
import ListGroup from 'react-bootstrap/ListGroup'

class ReposListComponent extends React.Component {
    renderList(){
        const repos = JSON.parse(localStorage.getItem('repos'))
        console.log(repos)
        if(repos){
            repos.forEach(r => {
                console.log(r)
            })
        }
        return <h1>repos list </h1>
    }
    render(){
        return (
            <Card style={{ width: '40rem' }}>
                {this.renderList()}
            </Card>
        )
    }
}

export default ReposListComponent 