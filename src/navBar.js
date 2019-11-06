import React from 'react';
import './App.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import DisplayGeneralStats from './DisplayGeneralStats'
import ghlogo from './github.png';
import 'bootstrap/dist/css/bootstrap.css';

class NavBarComponent extends React.Component {
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
        return <DisplayGeneralStats data={
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
    renderFeed(){
        console.log("render!")
        return <h1>feeed</h1>
    }
    renderSettings(){
        console.log("render!")
        return <h1>settings</h1>
    }
    renderExtraRepos(){
        console.log("render!")
        return(
            <Form inline>
                <FormControl type="text" placeholder="https://github.com/bitcoin/bitcoin" className="mr-sm-2" />
                <Button variant="outline-success">Add Repo</Button>
            </Form>
        )
    }
    clearAccount(){
        console.log("calling clear!!!!")
        localStorage.clear()
        this.props.onDeleteAccount(false)
    }
    render(){
        return(
            <Tabs defaultActiveKey="feed" id="uncontrolled-tab" onSelect={k => {
                if(k == "clear_account"){
                    this.clearAccount()
                }
            }}>
            <Tab eventKey="feed" title="Feed">
                <br/>
                {this.renderFeed()}
            </Tab>
            <Tab eventKey="profile" title="Profile">
                <br/>
                {this.renderProfile()}
            </Tab>
            <Tab eventKey="settings" title="Settings">
                <br/>
                {this.renderSettings()}
            </Tab>
            <Tab eventKey="extra_repos" title="Add Repos">
                <br/>
                {this.renderExtraRepos()}
            </Tab>
            <Tab eventKey="clear_account" title="Delete Account">
                <br/>
            </Tab>
          </Tabs>
        )
    }
    render22(){
        return (
            <Navbar bg="light" expand="lg">
              <Navbar.Brand href="#home">{this.getUserName()}</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">Link</Nav.Link>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form inline>
                  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavBarComponent 