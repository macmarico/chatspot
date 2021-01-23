import React, {useState} from 'react';
import {Link} from 'react-router-dom'

const Join = () => {

    const [username, setUsername] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div style={{padding:'10px', textAlign:'center'}}>
            <h1>Chatspot</h1>
            <h2>meet intresting people</h2>
            <h3>Get in</h3>
            <input type='text' name='username' placeholder='username' onChange={(event) => setUsername(event.target.value)}></input>
            <input type='text' name='room' placeholder='room' onChange={(event) => setRoom(event.target.value)}></input>
            <Link onClick={event => (!username || !room)? event.preventDefault() : null} to={`/home?username=${username}&room=${room}`}>
             <button>Sign In</button>
            </Link>   
        </div>
    )
}

export default Join
