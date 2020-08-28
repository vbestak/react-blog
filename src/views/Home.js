import React from 'react'
import TwitterLogin from 'react-twitter-auth'

function Home() {
    return (
        <div>
            <TwitterLogin
                loginUrl="http://localhost:8085/api/v1/auth/twitter"
                onFailure={()=>console.log("lol")}
                onSuccess={()=>console.log("succes roflmao")}
                requestTokenUrl="http://localhost:8085/api/v1/auth/twitter/reverse"
            />
        </div>
    )
}

export default Home
