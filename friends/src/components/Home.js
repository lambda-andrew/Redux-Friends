import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {

    render() {
        return (
            <div className='HomeDiv'>
            <header className="App-header">
                <h1>My Friends</h1>
                <button>
                    <Link to='/login'>Login</Link>
                </button>
            </header>
            </div>
        )
    }
}

export default Home;