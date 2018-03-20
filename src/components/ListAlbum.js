import React, {Component} from 'react'
import {Card, Grid, Header} from 'semantic-ui-react'

class ListUser extends Component {
  constructor() {
    super()
    this.state = {
      post: []
    }
  }

  componentDidMount() {
    const {match: {
        params
      }} = this.props
    fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}/albums`)
      .then(results => {
        return results.json();
        // eslint-disable-next-line
        console.log(results);
      }).then(data => {
      let users = data.map((post) => {
        return (
          <Card fluid color='teal' key={post.id}>
            <Card.Content>
              <Card.Header textAlign='center'>
                {post.title}
              </Card.Header>
            </Card.Content>
          </Card>)
        })
        this.setState({users: users})
        console.log("state", this.state.users)
      })
    }

  render() {
    return (<div className="fade-in-top">
      <Header size='huge' textAlign='center'>Albums</Header>
      <Grid centered columns={3} padded>
        <Grid.Column width={2}></Grid.Column>
        <Grid.Column width={11}>
          {this.state.users}
        </Grid.Column>
        <Grid.Column width={2}></Grid.Column>
      </Grid>
    </div>)
  }
}

export default ListUser
