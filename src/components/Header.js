import React from "react"

export default function Header() {
    return (
        <header className="app-header">
            <img src="images/troll_face.png" className="header--logo" alt="Troll face" />
            <div className='app--title'>Meme Generator</div>
            <div className='app--project'>React Course - Project 3</div>
        </header>
    )
}