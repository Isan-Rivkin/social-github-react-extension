import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ghlogo from './github.png';
import {getProfile,getUserRepoParsed } from './github'

class CreateComponent extends React.Component {
  state = {name : '', extra_repos : []}
  handleUserName(event){
    let fieldName = event.target.name 
    let fieldVal = event.target.value 
    // this is the github username 
    this.setState({name : fieldVal})
  }
  handleRepos(event){
    let fieldName = event.target.name 
    let fieldVal = event.target.value 
    // extra repos 
    if(fieldVal && fieldVal.length > 0 ){
      let repos = fieldVal.split(',')
      if(repos.length > 0){
        this.setState({extra_repos : repos })
      } 
    }
  }
  getLocalStorage(){
    const user = JSON.parse(localStorage.getItem('user'))
    const extra_repos = JSON.parse(localStorage.getItem('extra_repos'))
    return {user,extra_repos} 
  }
  handleClick(){
    // store in local storage 
    getProfile(this.state.name).then(data=>{
      const u = {}
      u.loginName       = data.login 
      u.userName        = data.name 
      u.avatar          = data.avatar_url
      u.publicRepos     = data.public_repos
      u.followers       = data.followers
      u.following       = data.following
      u.followers_url   = data.followers_url
      u.repos_url       = data.repos_url
      u.html_url        = data.html_url
      localStorage.setItem('user', JSON.stringify(u))
      localStorage.setItem('extra_repos', this.state.extra_repos)
      getUserRepoParsed(data.login,2000).then(reposRes => {
        console.log("got something! " , reposRes)
        localStorage.setItem('repos' , JSON.stringify(reposRes))
        this.props.onSubmit(true)
      }).catch(e =>{
        this.props.onSubmit(false)
      })
    }).catch(e=>{
      this.props.onSubmit(false)
    })
  }
  defaultUserName(){
    if(this.getLocalStorage().user){
      return this.getLocalStorage().user.login || "Enter Github User"
    }
    return "Enter Github User"
  }
  defaultExtraRepos(){
    return this.getLocalStorage().extra_repos || "https://github.com/bitcoin/bitcoin,github.com/torvalds/linux"
  }
  renderForm(){
    return (
      <Form >
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Github User</Form.Label>
          <Form.Control 
            type="text" 
            placeholder={this.defaultUserName()} 
            onChange={this.handleUserName.bind(this)}/>
          <Form.Text className="text-muted">
            To start tracking your social status
          </Form.Text>
        </Form.Group>        
        <Form.Group controlId="formExtraRepos">
          <Form.Label>Add not-owned repo's to track </Form.Label>
          <Form.Control 
            as="textarea" 
            placeholder={this.defaultExtraRepos()}
            rows="3"
            onChange={this.handleRepos.bind(this)} />
          <Form.Text className="text-muted">
              Comma seperated url's (Add anytime later)
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="button" onClick={this.handleClick.bind(this)}>
          Submit
        </Button>
      </Form>
    )
  }
  render(){
      return (
      <Card style={{ width: '40rem' }}>
      <Card.Img variant="top" width="30%" height="30%" src={ghlogo} />
      <Card.Body>
      {this.renderForm()}
      </Card.Body>
      </Card>
      )
  }
}
export default  CreateComponent