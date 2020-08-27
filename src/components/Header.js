import React from 'react'
import Navigation from './Navigation'

function Header() {
    let title = "Reddit 2.0"

    return (
        <div>
            <header>
                <div>
                    <h2> Reddit 2.0</h2>
                </div>
                <Navigation />
            </header>
        </div>
    )
}

export default Header
