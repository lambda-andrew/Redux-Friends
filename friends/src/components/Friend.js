import React from 'react';

class Friend extends React.Component {
    constructor(props) {
    super(props);
    this.state
    }
    
    render(){
    return (
        <div>
            <h1>{this.props.friendProps.name}</h1>
            <h3>{this.props.friendProps.age}</h3>
            <h3>{this.props.friendProps.email}</h3>
            <button>Delete Friend</button>
            <button>Update Friend</button>
        </div>
    )
    }
} 

export default Friend;