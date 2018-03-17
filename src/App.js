import React, { Component } from 'react';
import './App.css';
import ListUser from './components/ListUsers';
import { Grid } from 'semantic-ui-react'
import {BrowserRouter as Router,
        Route} from 'react-router-dom'
import Home from './components/Home'
import Navigation from './components/Navigation'
import ListPosts from './components/ListPosts'
import ListAlbum from './components/ListAlbum'
import ListPhotos from './components/ListPhotos'



class App extends Component {


  render() {
    return (
      <Router>
        <Grid centered columns={1}>
        <Grid.Column className='paddingBottom'>
         <Navigation />
        </Grid.Column>
        <Grid.Column className='paddingTop'>
         <Route exact path='/' component={Home}/>
         <Route path='/user' component={ListUser}/>
         <Route path='/post/:userId' component={ListPosts} />
         <Route path='/users/albums/:userId' component={ListAlbum}/>
         <Route path='/photos' component={ListPhotos}/>
         {/* <Route path={`/${match.url}/:userId`} component={ListPosts} /> */}
        </Grid.Column>
       </Grid>
     </Router>
    );
  }
}
export default App;
