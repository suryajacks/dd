import React from 'react'
import { Link } from 'react-router-dom'
function Navbar ()  {
    return <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="#" className="navbar-brand">Logo</Link>
        <div className="ml-auto">
            <ul className="navbar-nav">
                <li className="nav-list"><Link className="nav-link" to="Home">Home</Link></li>
                <li className="nav-list"><Link className="nav-link" to="Services">Services</Link></li>
                <li className="nav-list"><Link className="nav-link" to="Contact">Contact</Link></li>
            </ul>
        </div>
    </nav>
}

export default Navbar

