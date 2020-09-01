import React from 'react'
import FolderItem from './FolderItem';


function Folders(props) {
    const foldersArr = props.folders.map((x) => {
        return <FolderItem name={x.name}/>
    })
    return (
        <div className="folder-container">
            <div>{foldersArr}</div>
            <button>Add Folder</button>
        </div>
    )
}

export default Folders