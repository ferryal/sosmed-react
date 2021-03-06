import React, {Component} from 'react'
import {Input, Form, Button, Grid, Header} from 'semantic-ui-react'
import axios from 'axios'
import swal from 'sweetalert';

class EditComment extends Component {
  constructor() {
    super()
    this.state = {
      post: ''
    }
  }

  handleChange = event => {
    this.setState({
      post: document.getElementById('post').value
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    const data = {
      post: this.state.post
    };
    const config = {
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json'
      }
    }

    const {match: {
        params
      }} = this.props
    axios.put(`https://jsonplaceholder.typicode.com/posts/${params.postId}`, data, config)
      .then(res => {
        swal({
          title: 'Your Post Has Been Updated',
          text: 'Note: the resource will not be really updated on the server but it will be faked as if. Please check [console log] in Inspect',
          icon: 'success'
        })
        console.log(res);
        console.log(res.data);
        console.log(`Your Edit Post: ${data.post}`);

    })
  }

  render() {
    return (<Grid centered columns={1} padded>
      <Grid.Column width={12}>
        <Header size='large'>Edit Post</Header>
        <Form onSubmit={this.handleSubmit} className="fade-in-top">
          <Form.Field>
            <label>
              Edit Your Post</label>
            <Input id='post' placeholder='Edit Your Post' onChange={this.handleChange}/>
          </Form.Field>
          <Button type='submit' positive>Edit Post</Button>
        </Form>
      </Grid.Column>
    </Grid>)
  }

}

export default EditComment
