import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Card, Grid, Header, Icon } from 'semantic-ui-react'


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
        // eslint-disable-next-line
        console.log(results);
      }).then(data => {
        let users = data.map((post) => {
          return(
              <Card fluid color='teal' key={post.id}>
                <Card.Content>
                  <Card.Header textAlign='center'>
                    <Link to={`/posts/comments/${post.id}`}>
                      {post.title}
                    </Link>
                  </Card.Header>
                  <Card.Description>
                    {post.body}
                  </Card.Description>
                </Card.Content>
                <Card.Content extra centered>
                     <Link to={`/posts/comments/${post.id}`}>
                       <p><Icon name='comments outline' color='grey'/> Comments </p>
                     </Link>
                </Card.Content>
              </Card>
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
        <Grid centered columns={3} padded>
          <Grid.Column width={2}>
          {/* <ListUsers
            url={this.props.match.params.id}
          /> */}
          </Grid.Column>
          <Grid.Column width={11}>
            {this.state.users}
          </Grid.Column>
          <Grid.Column width={2}>
            {/* <MenuUser
              id={this.props.match.params.id}
            /> */}
          </Grid.Column>
        </Grid>
      </div>

    )
  }
}

export default ListUser
