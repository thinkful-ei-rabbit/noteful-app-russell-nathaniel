import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Folders from './Folders';
import Notes from './Notes';
import './App.css';


class App extends Component {
    render(){
        return<>
            <BrowserRouter>
                <Header />
                <Folders />
                <Notes />
            </BrowserRouter>
            </>
    }
}

export default App;