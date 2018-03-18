import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Button, Card, Image, Grid } from 'semantic-ui-react'
import ListPosts from './ListPosts'

class ListUser extends Component {
  constructor(){
    super()
    this.state = {
      users: [],
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(results => {
        return results.json();
      }).then(data => {
        let users = data.map((user) => {
          return(
                <Grid.Column>
                <Card.Group centered key={user.id}>
                  <Card raised>
                    <Card.Content>
                     <Image floated='right' size='mini' src='/assets/images/avatar/large/steve.jpg' />
                     <Card.Header>
                       {user.name}
                    </Card.Header>
                  <Card.Meta>
                      {user.website}
                  </Card.Meta>
                  <Card.Description>
                    Email:{user.email} <br/>
                    Phone:{user.phone}
                  </Card.Description>
                  </Card.Content>
                  <Card.Content extra centered>
                     <div className='ui two buttons'>
                       <Link to={`/users/albums/${user.id}`}>
                         <Button inverted color='green'>Albums</Button>
                       </Link>
                       <Link to={`/post/${user.id}`}>
                          <Button inverted fluid color='blue'>Posts</Button>
                       </Link>
                     </div>
                  </Card.Content>
                  </Card>
                </Card.Group>
              </Grid.Column>

              /* <ul>
                <Link to={`/post/${user.id}`}>
                  <li>name: {user.name}</li>
                </Link>
                <Link to={`/users/albums/${user.id}`}>
                  <li>see album</li>
                </Link>
                <li>username: {user.username}</li>
              </ul>  */
          )
        })
        this.setState({users: users})
        console.log("state", this.state.users)
      })
  }



  render(){
    return(
      <Grid centered columns={5} padded>
        {this.state.users}
      </Grid>
    )
  }
}

export default ListUser
