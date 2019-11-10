import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './navBar'
import Card from 'react-bootstrap/Card'
import ghlogo from './github.png';
import DisplayGeneralProfile from './DisplayGeneralProfile'

class ProfileComponent extends React.Component {
    renderHeader(){
        return (<NavBar onDeleteAccount={this.props.onDeleteAccount}/>)
    }
    getUser(){
        const user = JSON.parse(localStorage.getItem('user'))   
        return user 
    }
    getUserName(){
        const user = JSON.parse(localStorage.getItem('user'))
        if(user){
            return user.loginName 
        }
        return ''
    }
    getName(){
        const user = this.getUser()
        if(user){
            return user.userName 
        }
        return ''
    }
    getHtmlUrl(){
        const user = this.getUser()
        if(user){
            return user.html_url
        }
        return ''
    }
    getFollowers(){
        const user = this.getUser()
        if(user){
            return user.followers
        }
        return 0
    }
    getAvatar(){
        const user = JSON.parse(localStorage.getItem('user'))
        if(user){
            return user.avatar
        }
        return ghlogo
    }
    getFollowing(){
        const user = this.getUser()
        if(user){
            return user.following
        }
        return 0
    }
    getReposNum(){
        const user = this.getUser()
        if(user){
            return user.publicRepos
        }
        return 0
    }
    renderProfile(){
        return <DisplayGeneralProfile data={
            {
                homeUrl: this.getHtmlUrl(),
                name : this.getName(),
                username : this.getUserName(),
                followers : this.getFollowers(),
                following : this.getFollowing(),
                avatar : this.getAvatar(),
                repos : this.getReposNum(),
            }
        }/>
    }
    render(){
        return (
            <Card style={{ width: '40rem' }}>
            {this.renderProfile()}
            <Card.Body>
            {this.renderHeader()}
            </Card.Body>
            </Card>
            )
    }
}
export default ProfileComponent