import React, {Component} from 'react'
import {Menu} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class NavPosts extends Component {
  

  render() {
    return (
        <Menu pointing secondary vertical>
          <Menu.Header>
            Menu Posts
          </Menu.Header>
          <Link to="/posts/create">
            <Menu.Item onClick={this.handleItemClick}>
              Add Post
            </Menu.Item>
          </Link>
        </Menu>
      )
    }
}

export default NavPosts
