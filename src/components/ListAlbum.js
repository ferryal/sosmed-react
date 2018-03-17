import React, { Component } from 'react'
import {Link} from 'react-router-dom'


class ListUser extends Component {
  constructor(){
    super()
    this.state = {
      post: []
    }
  }

  componentDidMount(){
    const { match: {params}} = this.props
    fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}/albums`)
      .then(results => {
        return results.json();
        console.log(results);
      }).then(data => {
        let users = data.map((post) => {
          return(
            <div key={post.id}>
              <ul>
                <li>title: {post.title}</li>
              </ul>
            </div>
          )
        })
        this.setState({users: users})
        console.log("state", this.state.users)
      })
  }



  render(){
    return(
      <div>
        {this.state.users}
      </div>
    )
  }
}

export default ListUser
