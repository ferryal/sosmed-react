import React, {Component} from 'react'
import {Input, Form, Button, Grid, Header} from 'semantic-ui-react'
import axios from 'axios'
import swal from 'sweetalert';

class AddPosts extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      body: ''
    }
  }

  handleChange = event => {
    this.setState(
      {name: document.getElementById('name').value,
      body: document.getElementById('body').value
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    const data = {
      name: this.state.name,
      body: this.state.body
    };
    const config = {
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json'
      }
    }

    axios.post(`https://jsonplaceholder.typicode.com/posts`, {data}, config)
    .then(res => {
        swal({
          title: 'Your Post Has Been Success Created',
          text: 'Note: the resource will not be really updated on the server but it will be faked as if. Please check [console log] in Inspect',
          icon: 'success'
        })
        console.log(res);
        console.log(res.data);
        console.log(`Your Name: ${data.name}`);
        console.log(`Your New Post: ${data.body}`);
    })
  }

  render() {
    return (<Grid centered columns={1} padded>
      <Grid.Column width={12}>
        <Header size='large'>Create New Post</Header>
        <Form onSubmit={this.handleSubmit} className="fade-in-top">
          <Form.Field>
            <label>Your Name</label>
            <Input id='name' placeholder='Your Name' onChange={this.handleChange}/>
          </Form.Field>
          <Form.Field>
            <label>Your Post</label>
            <Input id='body' placeholder='Your Post' onChange={this.handleChange}/>
          </Form.Field>
          <Button type='submit' positive>Add Post</Button>
        </Form>
      </Grid.Column>
    </Grid>)
  }

}

export default AddPosts
