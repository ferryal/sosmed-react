import React, {Component} from 'react'
import { Menu } from 'semantic-ui-react'
import {Link} from 'react-router-dom'


class NavPosts extends Component{
  state = { activeItem: 'posts' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render(){
    const { activeItem } = this.state
    const { id } = this.props
    return(
      <Menu pointing secondary vertical>
        <Menu.Header> Menu Posts </Menu.Header>
        <Link to="/posts/create"><Menu.Item name='Add Post' active={activeItem === 'posts'} onClick={this.handleItemClick} /></Link>
        <Link to={`${id}/albums`}><Menu.Item name='Edit Post' active={activeItem === 'albums'} onClick={this.handleItemClick} /></Link>
        <Link to={`${id}/albums`}><Menu.Item name='Delete Post' active={activeItem === 'albums'} onClick={this.handleItemClick} /></Link>
      </Menu>
    )
  }
}

export default NavPosts
