import React from 'react'
import TwitterLogin from 'react-twitter-auth'

function Home() {
    return (
        <div>
            <TwitterLogin
                loginUrl='https://my.api.mockaroo.com/jj.json?key=5a2ce5d0'
                onFailure={()=>console.log("lol")}
                onSuccess={()=>console.log("succes roflmao")}
                requestTokenUrl='https://my.api.mockaroo.com/jj.json?key=5a2ce5d0'
            />
        </div>
    )
}

export default Home
