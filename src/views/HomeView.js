import React from 'react'

function HomeView() {
    return (
        <div style={{ minHeight: "80vh",textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center"}}>
            <p>Hello please login to your twitter account!</p>
            <a href="http://localhost:8085/login">Login</a>
        </div>
    )
}

export default HomeView
