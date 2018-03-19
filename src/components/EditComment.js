import React, {Component} from 'react'
import { Input, Form, Button, Grid, Header } from 'semantic-ui-react'
import axios from 'axios'
import swal from 'sweetalert';


class EditComment extends Component {
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

     const { match: {params}} = this.props
     axios.put(`https://jsonplaceholder.typicode.com/comments/${params.postId}`, data, config)
         .then(res => {
           swal({
              title: 'Your Comments Has Been Updated',
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
          <Header size='large'>Edit Comment</Header>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <label> Edit Your Comments</label>
                <Input id='comments' placeholder='Edit Your Comments' onChange={this.handleChange}/>
              </Form.Field>
               <Button type='submit' positive>Edit Comments</Button>
            </Form>
          </Grid.Column>
       </Grid>
    )
  }

}

export default EditComment
