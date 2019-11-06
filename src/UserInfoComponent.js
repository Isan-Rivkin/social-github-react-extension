import React from 'react';
import {getProfile} from './github'
class UserForm extends React.Component {
    state = {'name' : 'someone'}
    componentWillMount(){
        getProfile('isan-rivkin').then(data=>{
            // let loginName       = data.login 
            // let userName        = data.name 
            // let avatar          = data.avatar_url
            // let publicRepos     = data.public_repos
            // let followers       = data.followers
            // let following       = data.following
            // let followers_url   = data.followers_url
            // let repos_url       = data.repos_url
            // this.setState({name : loginName })
        })
    }
    render(){
        return <h1> {this.state.name} </h1>
    }
}

export default UserForm;

