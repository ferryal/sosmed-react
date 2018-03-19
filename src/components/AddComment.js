import React, {Component} from 'react'
import { Input, Form, Button, Grid, Header } from 'semantic-ui-react'
import axios from 'axios'
import swal from 'sweetalert';


class AddComment extends Component {
  constructor(){
    super()
    this.state = {
      comments:''
    }
  }

  handleChange = event => {
     this.setState({
       comments: document.getElementById('comments').value
     });
   }

   handleSubmit = event => {
     event.preventDefault();

     const data = {
       comments: this.state.comments
     };
     const config = {
         headers: {
           'Content-Type': 'application/json; charset=UTF-8',
           'Accept': 'application/json'
         }
       }

     axios.post(`https://jsonplaceholder.typicode.com/comments`, {data}, config)
         .then(res => {
           swal({
              title: 'Your Comments Has Been Created',
              text: 'Note: the resource will not be really updated on the server but it will be faked as if. Please check [console log] in Inspect',
              icon: 'success'
            })
           console.log(res);
           console.log(res.data);
         })
  }

  render(){
    return(
       <Grid centered columns={1} padded={true}>
         <Grid.Column width={12}>
          <Header size='large'>Create New Comment</Header>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <label>Your Comments</label>
                <Input id='comments' placeholder='Your Comments' onChange={this.handleChange}/>
              </Form.Field>
               <Button type='submit' positive>Add Comments</Button>
            </Form>
          </Grid.Column>
       </Grid>
    )
  }

}

export default AddComment
