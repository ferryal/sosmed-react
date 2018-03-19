import React, {Component} from 'react'
import { Menu } from 'semantic-ui-react'
import {Link} from 'react-router-dom'


class NavComment extends Component{
  state = { activeItem: 'posts' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render(){
    const { activeItem } = this.state
    return(
      <Menu pointing secondary vertical>
        <Menu.Header> Menu Comment </Menu.Header>
        <Link to="/comments"><Menu.Item name='Add Comment' active={activeItem === 'AddComment'} onClick={this.handleItemClick} /></Link>
      </Menu>
    )
  }
}

export default NavComment
