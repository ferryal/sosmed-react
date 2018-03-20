import React, {Component} from 'react'
import {Link} from "react-router-dom"
import {Menu} from 'semantic-ui-react'

class Home extends Component {


  render() {

    return (
        <div className="fade-in-top">
          <Menu inverted>
            <Link to="/">
              <Menu.Item onClick={this.handleItemClick}>
                Home
            </Menu.Item>
            </Link>
            <Link to="/users">
              <Menu.Item onClick={this.handleItemClick}>
                People
            </Menu.Item>
            </Link>
            <Link to="/photos">
              <Menu.Item onClick={this.handleItemClick}>
                Photos
              </Menu.Item>
            </Link>
          </Menu>
        </div>
    )
  }
}

export default Home
