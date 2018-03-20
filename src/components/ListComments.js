import React, {Component} from 'react'
// import {Link} from 'react-router-dom'
import {Card, Grid, Header, Icon} from 'semantic-ui-react'
import NavComment from './NavComment'
import {Link} from 'react-router-dom'

class ListComments extends Component {
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
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.userId}/comments`)
      .then(results => {
        return results.json();
        // eslint-disable-next-line
        console.log(results);
      }).then(data => {
      let users = data.map((comments) => {
        return (<Card fluid color='teal' key={comments.id}>
          <Card.Content>
            <Card.Header textAlign='center'>
              {comments.name}
            </Card.Header>
            <Card.Meta textAlign='center'>
              <p><Icon name='mail' color='grey'/> {comments.email}
              </p>
            </Card.Meta>
            <Card.Description>
              {comments.body}
            </Card.Description>
            <Card.Content extra textAlign='right'>
              <Link to={`/comments/${comments.id}`}>
                <p><Icon name='comments outline' color='grey'/>
                  Edit Comments
                </p>
              </Link>
            </Card.Content>
          </Card.Content>
        </Card>)
      })
      this.setState({users: users})
      console.log("state", this.state.users)
    })
  }

  render() {
    return (<div className="fade-in-top">
      <Header size='huge' textAlign='center'>Comments</Header>
      <Grid centered columns={3} padded>
        <Grid.Column width={2}>
          <NavComment/>
        </Grid.Column>
        <Grid.Column width={11}>
          {this.state.users}
        </Grid.Column>
        <Grid.Column width={2}></Grid.Column>
      </Grid>
    </div>)
  }
}

export default ListComments
