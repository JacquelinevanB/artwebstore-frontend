import React from 'react';

function Navigation() {
    return(
        <nav className="main-nav container">
            <div className="main-nav-container">
                <h2 className="main-nav-title">The ArtWebStore</h2>

                <ul className="main-nav-list" >
                    <li><a className="main-nav-link" href="#Home">Home</a></li>
                    <li><a className="main-nav-link" href="#Home">Basket</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;