import React from 'react'
import Tweet from '../components/Tweet'

function TweetView() {
    return (
        <div style={{display:"flex", flexDirection:"column", alignItems:"center", minHeight:"80vh", justifyContent:"center", fontSize:'24px', fontWeight:350}}>
            <p> Post a new status (tweet) on your profile page</p>
            <Tweet />
        </div>

)
}

export default TweetView
