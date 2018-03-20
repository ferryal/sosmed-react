import React, {Component} from 'react'
import {Menu} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class NavComment extends Component {
  

  render() {
    return (
        <Menu pointing secondary vertical>
          <Menu.Header>
            Menu Comment
          </Menu.Header>
          <Link to="/comments">
            <Menu.Item  onClick={this.handleItemClick}>
              Add Comment
            </Menu.Item>
          </Link>
        </Menu>
    )
  }
}

export default NavComment
