import React, { Component } from 'react';
import './App.css';
import ListUser from './components/ListUsers';
import { Grid } from 'semantic-ui-react'
import {BrowserRouter as Router,
        Route} from 'react-router-dom'
import Navigation from './components/Navigation'
import ListPosts from './components/ListPosts'
import ListAlbum from './components/ListAlbum'
import ListPhotos from './components/ListPhotos'
import ListComments from './components/ListComments'
import AddPosts from './components/AddPosts'
import AddComment from './components/AddComment'
import EditComment from './components/EditComment'
import EditPost from './components/EditPost'



class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Grid centered columns={1}>
          <Grid.Column className='paddingBottom'>
           <Navigation />
          </Grid.Column>
          </Grid>
          <Route exact path='/' component={ListUser}/>
          <Route path='/user' component={ListUser}/>
          <Route exact path='/post/:userId' component={ListPosts} />
          <Route path='/users/albums/:userId' component={ListAlbum}/>
          <Route path='/photos' component={ListPhotos}/>
          <Route path='/posts/comments/:userId' component={ListComments}/>
          <Route exact path='/posts/create' component={AddPosts} />
          <Route exact path='/comments' component={AddComment} />
          <Route path='/comments/:postId' component={EditComment} />
          <Route  path='/posts/edit/:postId' component={EditPost} />
        </div>
     </Router>
    );
  }
}
export default App;
