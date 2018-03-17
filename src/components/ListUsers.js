import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import ListPosts from './ListPosts'

class ListUser extends Component {
  constructor(){
    super()
    this.state = {
      users: [],
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(results => {
        return results.json();
      }).then(data => {
        let users = data.map((user) => {
          return(
            <div key={user.id}>
              <ul>
                <Link to={`/post/${user.id}`}>
                  <li>name: {user.name}</li>
                </Link>
                <li>username: {user.username}</li>
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
