import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
// import Folders from './Folders';
// import Notes from './Notes';
import MainMain from './Main';
import MainFolder from './Main';
import MainNote from './Main';
import './App.css';


class App extends Component {
  state = {
    notes: [],
    folders: []
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
                <MainMain>
                  <Route path="/" Component = {MainMain} />
                  <Route path="/folder" Component = {MainFolder} />
                  <Route path="/note" Component = {MainNote} />
                </MainMain>
              </div>
            </BrowserRouter>
            </>
    }
}

export default App