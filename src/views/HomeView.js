import React from 'react'
import Tweet from '../components/Tweet'

function HomeView() {
    return (
        <div>
            <p>Hello please login to your twitter account!</p>
            <a href="http://localhost:8085/login">Login</a>
        </div>
    )
}

export default HomeView