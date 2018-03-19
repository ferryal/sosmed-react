import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Button, Card, Grid, Icon } from 'semantic-ui-react'
// import ListPosts from './ListPosts'

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
              <div className="fade-in-top">
                <Card.Group centered key={user.id}>
                  <Card raised>
                    <Card.Content>
                     <Card.Header textAlign='center'>
                       {user.name}
                    </Card.Header>
                    <Card.Meta textAlign='center'>
                      {user.website}
                    </Card.Meta>
                    <Card.Description>
                      <p><Icon name='mail' color='blue'/>{user.email} </p>
                      <p><Icon name='phone' color='blue'/>{user.phone}</p>
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
            </div>
          </Grid.Column>
          )
        })
        this.setState({users: users})
        console.log("state", this.state.users)
      })
  }



  render(){
    return(
      <Grid centered columns={5} padded >
        {this.state.users}
      </Grid>
    )
  }
}

export default ListUser
