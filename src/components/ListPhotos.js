import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Image, Grid } from 'semantic-ui-react'



class ListUser extends Component {
  constructor(){
    super()
    this.state = {
      post: []
    }
  }

  componentDidMount(){
    // const { match: {params}} = this.props
    fetch(`https://jsonplaceholder.typicode.com/photos`)
      .then(results => {
        return results.json();
        console.log(results);
      }).then(data => {
        let photo = data.map((post) => {
          return(
            <div key={post.id}>
              <Image.Group>
                <Image src={post.thumbnailUrl} alt={post.id}/>
              </Image.Group>
            </div>
          )
        })
        this.setState({photo: photo})
        console.log("state", this.state.photo)
      })
  }



  render(){
    return(
      <Grid centered columns={5} padded>
        {this.state.photo}
      </Grid>
    )
  }
}

export default ListUser
