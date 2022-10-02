import React from "react"

function Header() {
    return (
        <header>
            <nav className="nav">
                <img src="./logo512.png" alt="img failed to load" className="nav-logo"/>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;