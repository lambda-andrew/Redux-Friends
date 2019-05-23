import React from 'react';

const Friend = (props) => {
    return (
        <div>
            <h1>{props.friendProps.name}</h1>
            <h3>{props.friendProps.age}</h3>
            <h3>{props.friendProps.email}</h3>
        </div>
    )
} 

export default Friend;