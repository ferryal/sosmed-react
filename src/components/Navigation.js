import React, {Component} from 'react'
import {Link} from "react-router-dom"
import { Menu} from 'semantic-ui-react'



class Home extends Component {
  state = {
    activeItem: 'home'

  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div className="fade-in-top">
        <Menu inverted>
          <Link to="/">
          <Menu.Item name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick} />
          </Link>
          <Link to="/user">
            <Menu.Item name='person' active={activeItem === 'person'} onClick={this.handleItemClick} />
          </Link>
          <Link to="/photos">
            <Menu.Item name='photos' active={activeItem === 'photos'} onClick={this.handleItemClick} />
          </Link>
          {/* <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick} />
          <Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick} /> */}
        </Menu>

      </div>
    )
  }
}



export default Home
