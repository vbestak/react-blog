import React from 'react'
import TwitterLogin from 'react-twitter-auth'

function Home() {
    return (
        <div>
            <TwitterLogin
                loginUrl='http://localhost:8085/login'
                onFailure={()=>console.log("lol")}
                onSuccess={()=>console.log("succes roflmao")}
                requestTokenUrl='http://localhost:8085/'
            />
            <a href="http://localhost:8085/login">Twitter</a>
        </div>
    )
}

export default Home
