import React from 'react';
import NoteItem from './NoteItem';

function Notes(props) {
    const notesArr = props.notes.map((x) => {
        return <NoteItem name={x.name}/>
    })
    return (
        <div className="note-container">
            <div>{notesArr}</div>
            <button>Add Note</button>
        </div>
    )
}

export default Notes