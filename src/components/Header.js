import React from 'react'
import Navigation from './Navigation'

function Header() {
    let title = "TwitterManager"

    return (
        <div>
            <header>
                <div>
                    <h2 style={{fontWeight:"500", fontSize:"24px"}}> {title}</h2>
                </div>
                <Navigation />
            </header>
        </div>
    )
}

export default Header
