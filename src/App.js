import React from 'react';
import UserForm from './UserFormComponent'
import CreateComponent from './createComponent'
import ProfileComponent from './ProfileComponent'
import logo from './logo.svg';
import './App.css';
class App extends React.Component {
  constructor(props){
    super(props)
  }
  state = {doneRegistring : false }
  isUserExist(){
    const user = JSON.parse(localStorage.getItem('user'))
    return user 
  }
  refresh(success){
    this.setState({doneRegistring : success})
  }
  render(){
    if(this.isUserExist()){
      // load user flow 
      return <ProfileComponent onDeleteAccount={this.refresh.bind(this)}/>
    }else{
      // load create flow 
      return <CreateComponent onSubmit={this.refresh.bind(this)}/>
    }
  }
}

// function temp() {
//   return (
//     <div className="App" style={{width: 500}}>
//       <UserForm/>
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
