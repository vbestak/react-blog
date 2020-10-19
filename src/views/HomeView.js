import React from 'react'

function HomeView() {
    return (
        <div style={{ fontSize: '24px', fontWeight: 350, minHeight: "80vh",textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <p style={{}}>Hello please login to your twitter account!</p>
            <a href="http://localhost:8085/login" style={{textDecoration:'none', backgroundColor:'#0f8b8d', display: 'block', color:'white', padding:'8px 22px', borderRadius:'4px'}}>Login</a>
        </div>
    )
}

export default HomeView
