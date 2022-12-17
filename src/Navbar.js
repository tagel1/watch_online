import React from 'react';
import './Navbar.css';

const Navbar = () => {

    return (

        <div className="navbar navbar-inverse">
            <div className="navbar-collapse collapse">
                <div className="container">
                    <div className="row">
                        <ul className="nav navbar-nav">
                            <li><a href="/">דף הבית</a></li>
                            <li><a href="/">התחברות / הרשמה </a></li>
                            <li><a href="/">גברים</a></li>
                            <li><a href="/">נשים</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Navbar;