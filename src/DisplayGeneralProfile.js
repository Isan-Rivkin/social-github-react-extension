
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card'
import ghlogo from './github.png';
// import { ListGroup, ListGroupItem } from 'reactstrap';


/**
 * homeUrl
 * name
 * username
 * followers
 * following
 * avatar
 * repos
 */
class DisplayGeneralProfile extends React.Component {
    getAvatar(){
        const user = JSON.parse(localStorage.getItem('user'))
        if(user){
            return user.avatar
        }
        return ghlogo
    }
    renderCardHeader(data){
        let followers = `${data.homeUrl}/followers`;
        let repositories = `${data.homeUrl}?tab=repositories`;
        let following = `${data.homeUrl}/following`;
        return (
            <Card.Body>
                <Card.Title> {data.username} </Card.Title>
                <Card.Link href={followers}>{data.followers} Followers</Card.Link>
                <Card.Link href={repositories}>{data.repos} Repositories</Card.Link>
                <Card.Link href={following}>{data.following} Following</Card.Link>
            </Card.Body>
        )
    }
    render() {
      let data = this.props.data;
      return (
        <Card style={{ width: '40rem' }}>
            <Card.Img variant="top" width="30%" height="30%" src={this.getAvatar()} roundedCircle/>
            {this.renderCardHeader(data)}
        </Card>
      )
    }
  }

  export default DisplayGeneralProfile