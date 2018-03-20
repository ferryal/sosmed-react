import React, {Component} from 'react'
// import {Link} from 'react-router-dom'
import {Image, Grid} from 'semantic-ui-react'

class ListUser extends Component {
  constructor() {
    super()
    this.state = {
      photo: []
    }
  }

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/photos`)
      .then(results => {
        return results.json();
        // eslint-disable-next-line
        console.log(results);
      }).then(data => {
      let photo = data.map((photo) => {
        return (<div key={photo.id} className="fade-in-top">
          <Image.Group>
            <Image src={photo.thumbnailUrl} alt={photo.id}/>
          </Image.Group>
        </div>)
      })
      this.setState({photos: photo})
      console.log("state", this.state.photo)
    })
  }

  render() {
    return (
      <Grid centeredcolumns={5} padded>
        {this.state.photos}
      </Grid>)
  }
}

export default ListUser
