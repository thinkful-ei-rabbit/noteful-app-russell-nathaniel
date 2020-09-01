import React from 'react';

function FolderItem(props) {
    return (
        <div className="folder">
            <h3>{props.name}</h3>
        </div>
    )
}

export default FolderItem