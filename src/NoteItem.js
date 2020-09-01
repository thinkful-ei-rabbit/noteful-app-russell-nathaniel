import React from 'react';
import { Route } from 'react-router-dom';

export default function NoteItem(){
    //add link to note-title
    return <li>
        <div className='note'>
        <h2 className='note-title'>Note 1</h2>
        <p className='note-info'>date modified info</p>
        <button>delete note</button>
    </div>
        </li>
}