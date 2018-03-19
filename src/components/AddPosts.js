import React, {Component} from 'react'
// import Forms from './Forms'
import { Input, Form, TextArea, Button, Grid, Header } from 'semantic-ui-react'
import axios from 'axios'

class AddPosts extends Component {
  constructor(){
    super()
    this.state = {
      name:'',
      body:''
    }
  }

  handleChange = event => {
     this.setState({
       name: document.getElementById('name').value,
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
           console.log(res);
           console.log(res.data);
         })
  }

  // componentDidMount(){
  //   // POST adds a random id to the object sent
  //   fetch('https://jsonplaceholder.typicode.com/posts', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //     title: 'foo',
  //     body: 'bar',
  //     userId: 1
  //     }),
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8"
  //     }
  //   }).then(response => response.json())
  //     .then(json => console.log(json))
  // }

  render(){
    return(
       <Grid centered columns={1} padded={true}>
         <Grid.Column width={12}>
          <Header size='large'>Create New Post</Header>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <label>Your Name</label>
                <Input id='name' placeholder='Your Name' onChange={this.handleChange}/>
              </Form.Field>
              <Form.Field>
                <label>Your Name</label>
                <Input id='body' placeholder='Your Post' onChange={this.handleChange}/>
              </Form.Field>
              {/* <Form.Field
                  id='body'
                  control={TextArea}
                  label='Your Post'
                  placeholder='Your Post'
                  onChange={this.handleChange}
              /> */}
               <Button type='submit' positive>Add Post</Button>
            </Form>
          </Grid.Column>
       </Grid>
        /* <form onSubmit={this.handleSubmit}>
         <label>
           Your Name:
           <input
             id='name'
             type="text"
             name="name"
             onChange={this.handleChange}
           />
         </label>
         <br/>
         <label>
           Your Post:
           <input
             id='body'
             type="text"
             name="post"
            onChange={this.handleChange}
          />
         </label>
         <br/>
         <label>
           Your Name:
           <input
             id='name'
             type="text"
             name="name"
             onChange={this.handleChange}
           />
         </label>
         <br/>
         <button type="submit">Add</button>
       </form> */
    )
  }

}

export default AddPosts
