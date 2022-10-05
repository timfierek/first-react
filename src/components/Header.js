import React from "react"

function Header() {
    return (
        <header>
            <nav className="nav">
                <div className="nav-logo-text">
                    <img src="./logo512.png" alt="" className="nav-logo"/>
                    <h2 className="nav-text">ReactFacts</h2>
                </div>
                <ul className="nav-items">
                    <li>Tim's First React Project</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;