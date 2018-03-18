import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Card, Grid, Header } from 'semantic-ui-react'



class ListUser extends Component {
  constructor(){
    super()
    this.state = {
      post: []
    }
  }

  componentDidMount(){
    const { match: {params}} = this.props
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${params.userId}`)
      .then(results => {
        return results.json();
        console.log(results);
      }).then(data => {
        let users = data.map((post) => {
          return(
            <div>
              <Grid.Column>
                <Card fluid color='teal' key={post.id}>
                  <Card.Content>
                  <Card.Header textAlign='center'>
                    {post.title}
                  </Card.Header>
                  <Card.Description>
                    {post.body}
                  </Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>
            </div>

            /* <div key={post.id}>
              <ul>
                <li>title: {post.title}</li>
                <li>post: {post.body}</li>
              </ul>
            </div> */
          )
        })
        this.setState({users: users})
        console.log("state", this.state.users)
      })
  }



  render(){
    return(
      <div>
        <Header size='huge' textAlign='center'>Posts</Header>
        <Grid centered columns={1} padded>
          {this.state.users}
        </Grid>
      </div>

    )
  }
}

export default ListUser
