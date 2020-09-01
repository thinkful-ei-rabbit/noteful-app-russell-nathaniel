import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
// import Folders from './Folders';
// import Notes from './Notes';
import Main from './Main';
import MainFolder from './MainFolder';
import MainNote from './MainNote';
import store from './dummy-store';
import './App.css';


class App extends Component {
  state = {
    notes: store.notes,
    folders: store.folders
  };

    render(){
        return<>
            <BrowserRouter>
            <div>
                <Header />
                {/* <Folders />
                <Notes >
                  <Route path="/" Component = {Notes} />
                  <Route path="/folders" Component = {} />
                </Notes> */}
                  <Route exact path="/" render={(routeProps) => <Main {...routeProps} folders={this.state.folders} notes={this.state.notes}/>}/>
                  <Route exact path="/folder/:folderId" component={MainFolder} />
                  <Route exact path="/note/:noteId" component={MainNote} />
                  {/* <Route path="/folder" Component = {MainFolder} />
                  <Route path="/note" Component = {MainNote} /> */}
              </div>
            </BrowserRouter>
            </>
    }
}

export default App