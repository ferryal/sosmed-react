import React, {Component} from 'react'
import {Link} from "react-router-dom"
import { Menu} from 'semantic-ui-react'
import SideBar from './SideBar'




// class Home extends Component {
//   state = { activeItem: 'home' }
//
//  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
//
//   render(){
//     const { activeItem } = this.state
//     return(
//       <Segment inverted>
//         <Menu inverted pointing secondary>
//             <Menu.Item name='User' active={activeItem === 'User'} onClick={this.handleItemClick} />
//           {/* <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick} />
//           <Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick} /> */}
//         </Menu>
//       </Segment>
//     )
//   }
// }

class Home extends Component {
  state = {
    activeItem: 'home'

  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <SideBar />
      </div>
    )
  }
}



export default Home
