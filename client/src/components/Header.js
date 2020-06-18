import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';


function Header() {

    // to make an underline, which menu item selected
    const handleClick = e => {
        document.querySelectorAll('.link').forEach(item => item.style.borderBottom = 'none')
        e.target.style.borderBottom = '2px solid #BF1B79'
    }

    return (
        <div className="navbar-content">
            <Navbar expand="lg" variant="light">
                <Link to="/" className="brand">Brandname</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Link to="/" className="link" onClick={handleClick}>Menu Items 1</Link>
                            <Link to="/menu2" className="link" onClick={handleClick} >Menu Items 2</Link>
                            <Link to="/menu3" className="link" onClick={handleClick} >Menu Items 3</Link>
                            <Link to="/menu4" className="link" onClick={handleClick} >Menu Items 4</Link>
                            <Link to="/menu5" className="link" onClick={handleClick} >Menu Items 5</Link>
                            <Link to="/menu6" className="link" onClick={handleClick} >Menu Items 6</Link>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header;