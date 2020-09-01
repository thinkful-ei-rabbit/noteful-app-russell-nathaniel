import React from 'react';
import Folders from './Folders';
import Notes from './Notes';

function Main(props) {
    return (
        <div>
        <h1>Folders</h1>
    <Folders folders={props.folders}/>
    <Notes notes={props.notes}/>
    </div>
    )
}

export default Main;